import { Where } from "../../domQL/domQL";
import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
import { DOMWindow } from "jsdom";
export interface IDomProp {
    $$prop: symbol;
    id: string;
    parent: IDomProp[];
/**
 * @ignore
*/
    __trackMissingChildren: boolean;
/**
 * Defines the query of a new prop.
 * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html
* ```js
ayakashi
    .select("myProp")
    .where({
        id: {
            eq: "main"
        }
    })
```
*/
    where: (q: Where) => this;
/**
 * Limits the prop matches.
 * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html#limit-skip-and-order
* ```js
ayakashi
    .select("myProp")
    .where({
        id: {
            eq: "main"
        }
    })
    .limit(2)
```
*/
    limit: (n: number) => this;
/**
 * Skips some of the prop matches.
 * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html#limit-skip-and-order
* ```js
ayakashi
    .select("myProp")
    .where({
        id: {
            eq: "main"
        }
    })
    .skip(1)
```
*/
    skip: (n: number) => this;
/**
 * Changes the order of how a prop's matches are retrieved.
 * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html#limit-skip-and-order
* ```js
ayakashi
    .select("myProp")
    .where({
        id: {
            eq: "main"
        }
    })
    .order("desc")
```
*/
    order: (ord: "asc" | "desc") => this;
/**
 * Limits the new prop's matches to child elements of an existing prop.
 * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html#child-queries
* ```js
ayakashi
    .select("myProp")
    .where({
        id: {
            eq: "main"
        }
    })
    .from("existingProp")
```
*/
    from: (propId: string | string[] | IDomProp | IDomProp[]) => this;
/**
 * Manually triggers a prop.
 * Learn more here: http://ayakashi.io/docs/going_deeper/re-evaluating-props.html
* ```js
const myProp = ayakashi
    .select("myProp")
    .where({
        id: {
            eq: "main"
        }
    });
await myProp.trigger();
```
*/
    trigger: (triggerOptions?: {
        force?: boolean;
        showNoMatchesWarning?: boolean;
    }) => Promise<number>;
/**
 * Makes the prop to ignore its cached elements on its next trigger and be re-evaluated.
 * Learn more here: http://ayakashi.io/docs/going_deeper/re-evaluating-props.html
* ```js
const mainSection = ayakashi
    .select()
    .where({
        id: {
            eq: "main"
        }
    });

//use the mainSection prop
//...

//after some interaction (scroll, click etc) the page updates the #main element dynamically
//...

mainSection.update();

//use the mainSection prop again
//...
```
*/
    update: () => this;
/**
 * Defines a new child query with a limit of 1 match.
 * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html#child-queries
* ```js
ayakashi
    .select("myParentProp")
    .where({
        id: {
            eq: "main"
        }
    })
    .selectChild("repo")
            .where({
                href: {
                    like: "github.com"
                }
            })
```
*/
    selectChild: (childPropId?: string) => IDomProp;
/**
 * Defines a new child query with a limit of 1 match.
 * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html#child-queries
 * Alias of selectChild()
* ```js
ayakashi
    .select("myParentProp")
    .where({
        id: {
            eq: "main"
        }
    })
    .selectFirstChild("repo")
            .where({
                href: {
                    like: "github.com"
                }
            })
```
*/
    selectFirstChild: (childPropId?: string) => IDomProp;
/**
 * Defines a new child query with a limit of 1 match in and a descending ordering.
 * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html#child-queries
 * Alias of selectChild()
* ```js
ayakashi
    .select("myParentProp")
    .where({
        id: {
            eq: "main"
        }
    })
    .selectLastChild("repo")
            .where({
                href: {
                    like: "github.com"
                }
            })
```
*/
    selectLastChild: (childPropId?: string) => IDomProp;
/**
 * Defines a new child query with no match limit.
 * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html#child-queries
 * Alias of selectChild()
* ```js
ayakashi
    .select("myParentProp")
    .where({
        id: {
            eq: "main"
        }
    })
    .selectChildren("repo")
            .where({
                href: {
                    like: "github.com"
                }
            })
```
*/
    selectChildren: (childPropId?: string) => IDomProp;
/**
 * Checks if a prop has any matches. The prop will be re-evaluated every time this runs.
 * Useful for dynamic pagination loops.
* ```js
const next = ayakashi
    .select("next")
    .where({
        id: {
            eq: "nextPage"
        }
    })
while (await next.hasMatches()) {
    // do work in the current page...
    // go to the next page
    await ayakashi.navigationClick("next");
}
```
*/
    hasMatches: () => Promise<boolean>;
/**
 * Adds a child match placeholder if a child does not exist in a collection of parents.
 * Can be used to preserve proper ordering when extracting children that might sometimes not exist.
* ```js
// for the following html
// <div class="container"><a href="http://example.com">link1</a></div>
// <div class="container">I don't have a link</div>
// <div class="container"><a href="http://example2.com">link2</a></div>
ayakashi
    .select("parentProp")
    .where({
        class: {
            eq: "container"
        }
    })
    .trackMissingChildren()
    .selectChild("childProp")
        .where({
            tagName: {
                eq: "A"
            }
        });
const result = await ayakashiInstance.extract("childProp");
// When we extract the childProps, we will get the following (notice the empty childProp):
// result => [{childProp: "link1"}, {childProp: ""}, {childProp: "link2"}]
// if we didn't use trackMissingChildren(), we would have gotten:
// result => [{childProp: "link1"}, {childProp: "link2"}]
```
*/
    trackMissingChildren: () => IDomProp;
}
export declare function createQuery(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance, opts: {
    propId?: string;
    triggerFn?: () => Promise<number>;
    window?: DOMWindow;
}): IDomProp;
