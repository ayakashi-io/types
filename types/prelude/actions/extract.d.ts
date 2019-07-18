import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
export declare type ExtractorFn = (this: Window["ayakashi"]) => {
    extract: (el: any) => any;
    isValid: (result: any) => boolean;
    useDefault: () => any;
};
export declare type Extractable = string | {
    [key: string]: Extractable;
} | ((el: any, index: number) => any) | RegExp | [string | RegExp, any];
export declare function attachExtract(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance): void;
