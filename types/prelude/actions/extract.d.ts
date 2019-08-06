import { IDomProp } from "../query/query";
import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
export interface IExtractActions {
/**
 * Extracts data from a prop.
 * Learn more here: https://ayakashi.io/docs/guide/data-extraction.html
* ```js
ayakashi.select("myDivProp").where({id: {eq: "myDiv"}});
const result = await ayakashi.extract("myDivProp");
```
*/
    extract: (propId: string | IDomProp, extractable?: Extractable) => any;
}
export declare type ExtractorFn = (this: Window["ayakashi"]) => {
    extract: (el: any) => any;
    isValid: (result: any) => boolean;
    useDefault: () => any;
};
export declare type Extractable = string | {
    [key: string]: Extractable;
} | ((el: any, index: number) => any) | RegExp | [string | RegExp, any];
export declare function attachExtract(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance): void;
