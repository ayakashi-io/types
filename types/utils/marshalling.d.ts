export declare function replacer(_key: string, value: unknown): unknown;
export declare function getReviver(ns: unknown): (_key: string, value: {
    __ayakashi__isFunction__?: boolean;
    __ayakashi__fn__?: string;
    __ayakashi__isRegex__?: boolean;
    __ayakashi__source__?: string;
    __ayakashi__flags__?: string;
}) => Function | RegExp | {
    __ayakashi__isFunction__?: boolean | undefined;
    __ayakashi__fn__?: string | undefined;
    __ayakashi__isRegex__?: boolean | undefined;
    __ayakashi__source__?: string | undefined;
    __ayakashi__flags__?: string | undefined;
};
