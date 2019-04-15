import { IAyakashiInstance } from "../prelude";
export declare type ExtractorFn = () => {
    extract: (el: any) => any;
    isValid: (result: any) => boolean;
    useDefault: () => any;
};
export declare type Extractable = string | {
    [key: string]: Extractable;
} | ((el: any, index: number) => any) | RegExp | [string | RegExp, any];
export declare function attachExtract(ayakashiInstance: IAyakashiInstance): void;
