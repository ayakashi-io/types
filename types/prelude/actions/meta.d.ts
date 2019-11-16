import { IConnection } from "../../engine/createConnection";
import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
import { IDomProp } from "../query/query";
import { ExtractorFn } from "./extract";
export interface IMetaActions {
/**
 * Given a prop name or prop object returns a prop object or null if the prop is not defined.
 * Can be used to get prop references from their name or to check if the prop is valid.
 * Learn more here: https://ayakashi.io/docs/going_deeper/anonymous-props-and-references.html
* ```js
ayakashi.prop("myProp");
```
*/
    prop: (propId: IDomProp | string) => IDomProp | null;
/**
 * Evaluates a javascript function in the current page.
 * Learn more here: https://ayakashi.io/docs/going_deeper/evaluating-javascript-expressions.html
* ```js
const title = await ayakashi.evaluate(function() {
    return document.title;
});
```
*/
    evaluate: <T, U extends any[]>(fn: (this: Window["ayakashi"], ...params: U) => T, ...args: U) => Promise<T>;
/**
 * Evaluates an asynchronous javascript function in the current page.
 * Learn more here: https://ayakashi.io/docs/going_deeper/evaluating-javascript-expressions.html
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
    evaluateAsync: <T, U extends any[]>(fn: (this: Window["ayakashi"], ...params: U) => Promise<T>, ...args: U) => Promise<T>;
/**
 * Defines a new prop without using the domQL syntax.
 * Learn more here: https://ayakashi.io/docs/going_deeper/defining-props-without-domql.html
* ```js
ayakashi.defineProp(function() {
    return this.document.getElementById("main");
}, "mainSection");
```
*/
    defineProp: (fn: (this: Window["ayakashi"]) => HTMLElement | HTMLElement[] | NodeList, propId?: string) => IDomProp;
/**
 * Pauses the execution of the scraper.
 * Learn more here: https://ayakashi.io/docs/guide/debugging.html
* ```js
await ayakashi.pause();
```
*/
    pause: () => Promise<void>;
/**
 * Registers a new action and makes it available in the ayakashi instance.
 * Learn more here: https://ayakashi.io/docs/advanced/creating-your-own-actions.html
* ```js
ayakashi.registerAction("myAction", async function(prop) {
    console.log("running myAction");
});
```
*/
    registerAction: <T>(name: string, fn: (this: IAyakashiInstance, ...args: any[]) => Promise<T>) => void;
/**
 * Registers a new extractor and makes it available in the extract() method.
 * Learn more here: https://ayakashi.io/docs/advanced/creating-your-own-extractors.html
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
}
export declare function attachMetaActions(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance, connection: IConnection): void;
