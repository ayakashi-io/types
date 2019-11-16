import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
import { IApiAyakashiInstance } from "../apiPrelude";
declare type valueof<T> = T extends (infer U)[] ? U : T;
export interface IJoinActions {
/**
 * Groups together multiple sets of related data.
 * Learn more here: https://ayakashi.io/docs/guide/data-extraction.html#grouping-extracted-data
*/
    join: <T>(obj: T) => {
        [P in keyof T]: valueof<T[P]>;
    }[];
}
export declare function attachJoinActions(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance | IApiAyakashiInstance): void;
export {};
