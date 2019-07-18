import { CoreOptions, RequestAPI, RequiredUriUrl, Request } from "@ayakashi/request/core";
import { IAyakashiInstance } from "./prelude";
export interface IApiAyakashiInstance {
    retry: IAyakashiInstance["retry"];
    yield: IAyakashiInstance["yield"];
    yieldEach: IAyakashiInstance["yieldEach"];
    recursiveYield: IAyakashiInstance["recursiveYield"];
    recursiveYieldEach: IAyakashiInstance["recursiveYieldEach"];
    get: (uri: string, options?: CoreOptions) => Promise<any>;
    post: (uri: string, options?: CoreOptions) => Promise<any>;
    put: (uri: string, options?: CoreOptions) => Promise<any>;
    patch: (uri: string, options?: CoreOptions) => Promise<any>;
    delete: (uri: string, options?: CoreOptions) => Promise<any>;
    head: (uri: string, options?: CoreOptions) => Promise<any>;
    __wrap: (requestInstance: RequestAPI<Request, CoreOptions, RequiredUriUrl>, methods: ["get", "post", "put", "patch", "delete", "head"]) => void;
}
export declare function apiPrelude(): IApiAyakashiInstance;
