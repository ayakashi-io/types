import { IConnection } from "../engine/createConnection";
import { Extractable, ExtractorFn } from "./actions/extract";
import { IDomProp } from "./query/query";
import { Query, QueryOptions } from "../domQL/domQL";
export interface IAyakashiInstance {
    propRefs: {
        [key: string]: IDomProp;
    };
    __connection: IConnection;
    extractors: {
        [key: string]: () => Promise<void>;
    };
    /**
     * Given a prop name or prop object returns a prop object or null if the prop is not defined.
     * Can be used to get prop references from their name or to check if the prop is valid.
     * Learn more here: http://ayakashi.io/docs/going_deeper/anonymous-props-and-references.html
     * ```js
    ayakashi.prop("myProp");
    ```
    */
    prop: (propId: IDomProp | string) => IDomProp | null;
    /**
     * Evaluates a javascript function in the current page.
     * Learn more here: http://ayakashi.io/docs/going_deeper/evaluating-javascript-expressions.html
     * ```js
    const title = await ayakashi.evaluate(function() {
        return document.title;
    });
    ```
    */
    evaluate: IConnection["evaluate"];
    /**
     * Evaluates an asynchronous javascript function in the current page.
     * Learn more here: http://ayakashi.io/docs/going_deeper/evaluating-javascript-expressions.html
     * ```js
    await ayakashi.evaluateAsync(function() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 1000);
        });
    });
    ```
    */
    evaluateAsync: IConnection["evaluateAsync"];
    /**
     * Defines a new domQL prop with no match limit.
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
    select: (propId?: string) => IDomProp;
    /**
     * Defines a new domQL prop with a limit of 1 match.
     * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html
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
     * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html#limit-skip-and-order
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
     * Learn more here: http://ayakashi.io/docs/guide/querying-with-domql.html#limit-skip-and-order
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
    /**
     * Defines a new prop without using the domQL syntax.
     * Learn more here: http://ayakashi.io/docs/going_deeper/defining-props-without-domql.html
     * ```js
    ayakashi.defineProp(function() {
        return document.getElementById("main");
    }, "mainSection");
    ```
    */
    defineProp: (fn: () => HTMLElement | HTMLElement[] | NodeList, propId?: string) => IDomProp;
    /**
     * Registers a new action and makes it available in the ayakashi instance.
     * Learn more here: http://ayakashi.io/docs/advanced/creating-your-own-actions.html
     * ```js
    ayakashi.registerAction("myAction", async function(prop) {
        console.log("running myAction");
    });
    ```
    */
    registerAction: <T>(name: string, fn: (this: IAyakashiInstance, ...args: any[]) => Promise<T>) => void;
    /**
     * Extracts data from a prop.
     * Learn more here: http://ayakashi.io/docs/guide/data-extraction.html
     * ```js
    ayakashi.select("myDivProp").where({id: {eq: "myDiv"}});
    const result = await ayakashi.extract("myDivProp");
    ```
    */
    extract: (propId: string | IDomProp, extractable?: Extractable) => any;
    /**
     * Registers a new extractor and makes it available in the extract() method.
     * Learn more here: http://ayakashi.io/docs/advanced/creating-your-own-extractors.html
     * ```js
    ayakashi.registerExtractor("id", function() {
        return {
            extract: function(element) {
                return element.id;
            },
            isValid: function(result) {
                return !!result;
            },
            useDefault: function() {
                return "no-id-found";
            }
        };
    });
    ```
    */
    registerExtractor: (extractorName: string, extractorFn: ExtractorFn, dependsOn?: string[]) => void;
    /**
     * Pauses the execution of the scrapper.
     * Learn more here: http://ayakashi.io/docs/guide/debugging.html
     * ```js
    await ayakashi.pause();
    ```
    */
    pause: () => Promise<void>;
    /**
     * Yields extracted data from a scrapper to the next step of the pipeline.
     * Learn more about yield in this example: http://ayakashi.io/guide/building-a-complete-scraping-project.html
     * ```js
    ayakashi.select("myDivProp").where({id: {eq: "myDiv"}});
    const result = await ayakashi.extract("myDivProp");
    await ayakashi.yield(result);
    ```
    */
    yield: (extracted: object | Promise<object>) => Promise<void>;
    /**
     * Sugar method to yield multiple matches.
     * Learn more about yield in this example: http://ayakashi.io/guide/building-a-complete-scraping-project.html
     * ```js
    await ayakashi.yieldEach(extractedLinks);
    //is the same as
    for (const link of extractedLinks) {
        await ayakashi.yield(extractedLinks);
    }
    ```
    */
    yieldEach: (extracted: object[] | Promise<object[]>) => Promise<void>;
    /**
     * Retry an async operation.
     * Default is 10 retries.
     * If the operation returns a result, that result will also be returned by retry.
     * Learn more about retries at: https://ayakashi.io/docs/going_deeper/automatic_retries.html
     * ```js
    await ayakashi.retry(async function() {
        await ayakashi.goTo("https://github.com/ayakashi-io/ayakashi");
    }, 5);
    ```
    */
    retry: <T>(task: (currentRetry: number) => Promise<T>, retries?: number) => Promise<T>;
}
declare global {
    interface Window {
        ayakashi: {
            propTable: {
                [key: string]: {
                    matches: HTMLElement[];
                };
            };
            extractors: {
                [key: string]: ExtractorFn;
            };
            preloaders: {
                domQL: {
                    domQuery: (q: Query, opts?: QueryOptions) => HTMLElement[];
                };
                getNodeSelector: (el: HTMLElement) => string;
            };
            paused: boolean;
            resume: () => void;
        };
    }
}
export declare function prelude(connection: IConnection): Promise<IAyakashiInstance>;
