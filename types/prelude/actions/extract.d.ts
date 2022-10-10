import { IDomProp } from "../query/query";
import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
export interface IExtractActions {
/**
 * Extracts data from a prop.
 * Learn more here: https://ayakashi-io.github.io/docs/guide/data-extraction.html
* ```js
ayakashi.select("myDivProp").where({id: {eq: "myDiv"}});
const result = await ayakashi.extract("myDivProp");
```
*/
    extract: <T = string, U = T>(propId: string | IDomProp, extractable?: Extractable<T, U>) => Promise<(T | U)[]>;
/**
 * Extracts data from the first match of a prop.
 * Learn more here: https://ayakashi-io.github.io/docs/guide/data-extraction.html
* ```js
ayakashi.select("myDivProp").where({id: {eq: "myDiv"}});
const result = await ayakashi.extractFirst("myDivProp");
```
*/
    extractFirst: <T = string, U = T>(propId: string | IDomProp, extractable?: Extractable<T, U>) => Promise<T | U | null>;
/**
 * Extracts data from the last match of a prop.
 * Learn more here: https://ayakashi-io.github.io/docs/guide/data-extraction.html
* ```js
ayakashi.select("myDivProp").where({id: {eq: "myDiv"}});
const result = await ayakashi.extractLast("myDivProp");
```
*/
    extractLast: <T = string, U = T>(propId: string | IDomProp, extractable?: Extractable<T, U>) => Promise<T | U | null>;
}
export declare type ExtractorFn = (this: Window["ayakashi"]) => {
    extract: (el: any) => any;
    isValid: (result: any) => boolean;
    useDefault: () => any;
};
export declare type Extractable<T, U> = string | ((el: HTMLElement, index: number) => T | U) | RegExp | [
    string | RegExp,
    U
];
export declare function attachExtract(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance): void;
