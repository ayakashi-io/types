import { Query, El } from "./domQL";
export declare type NodeQuery = () => string | string[] | null;
export declare function runQuery(env: Window, query: Query, el: El): boolean;
