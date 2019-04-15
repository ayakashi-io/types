export declare type Query = {
    where?: Where;
    limit?: number;
    skip?: number;
    order?: "asc" | "desc";
};
export declare type Where = {
    [key: string]: {
        [key: string]: {
            [key: string]: string | string[];
        } | Where[];
    } | Where[] | {
        [key: string]: string | string[];
    };
};
export declare type QueryOptions = {
    env?: Window;
    scope?: El | HTMLElement;
    recursive?: boolean;
};
export declare type El = Element & HTMLElement & {
    [key: string]: string;
};
export declare function domQuery(query: Query, options?: QueryOptions): HTMLElement[];
