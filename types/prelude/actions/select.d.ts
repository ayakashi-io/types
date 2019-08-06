import { IDomProp } from "../query/query";
import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
import { DOMWindow } from "jsdom";
export interface ISelectActions {
/**
 * Defines a new domQL prop with no match limit.
 * Learn more here: https://ayakashi.io/docs/guide/querying-with-domql.html
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
    select: (propId?: string) => IDomProp;
/**
 * Defines a new domQL prop with a limit of 1 match.
 * Learn more here: https://ayakashi.io/docs/guide/querying-with-domql.html#limit-skip-and-order
* ```js
ayakashi
    .selectOne("myProp")
    .where({
        id: {
            eq: "main"
        }
    })
```
*/
    selectOne: (propId?: string) => IDomProp;
/**
 * Defines a new domQL prop with a limit of 1 match.
 * Learn more here: https://ayakashi.io/docs/guide/querying-with-domql.html#limit-skip-and-order
 * Alias of selectOne()
* ```js
ayakashi
    .selectFirst("myProp")
    .where({
        id: {
            eq: "main"
        }
    })
```
*/
    selectFirst: (propId?: string) => IDomProp;
/**
 * Defines a new domQL prop with a limit of 1 match and a descending order.
 * Learn more here: https://ayakashi.io/docs/guide/querying-with-domql.html#limit-skip-and-order
* ```js
ayakashi
    .selectLast("myProp")
    .where({
        id: {
            eq: "main"
        }
    })
```
*/
    selectLast: (propId?: string) => IDomProp;
}
export declare function attachQuery(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance, window?: DOMWindow): void;
