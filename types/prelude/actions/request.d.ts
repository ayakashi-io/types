import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
import { IApiAyakashiInstance } from "../apiPrelude";
import { CoreOptions, RequestAPI, RequiredUriUrl, Request } from "@ayakashi/request/core";
export interface IRequestActions {
/**
 * Issues a GET Http request.
 * You can learn more about requests on the API scrapers section: https://ayakashi.io/docs/guide/api-scrapers.html
*/
    get: (uri: string, options?: CoreOptions) => Promise<any>;
/**
 * Issues a POST Http request.
 * You can learn more about requests on the API scrapers section: https://ayakashi.io/docs/guide/api-scrapers.html
*/
    post: (uri: string, options?: CoreOptions) => Promise<any>;
/**
 * Issues a PUT Http request.
 * You can learn more about requests on the API scrapers section: https://ayakashi.io/docs/guide/api-scrapers.html
*/
    put: (uri: string, options?: CoreOptions) => Promise<any>;
/**
 * Issues a PATCH Http request.
 * You can learn more about requests on the API scrapers section: https://ayakashi.io/docs/guide/api-scrapers.html
*/
    patch: (uri: string, options?: CoreOptions) => Promise<any>;
/**
 * Issues a DELETE Http request.
 * You can learn more about requests on the API scrapers section: https://ayakashi.io/docs/guide/api-scrapers.html
*/
    delete: (uri: string, options?: CoreOptions) => Promise<any>;
/**
 * Issues a HEAD Http request.
 * You can learn more about requests on the API scrapers section: https://ayakashi.io/docs/guide/api-scrapers.html
*/
    head: (uri: string, options?: CoreOptions) => Promise<any>;
}
export declare function attachRequest(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance | IApiAyakashiInstance, requestInstance: RequestAPI<Request, CoreOptions, RequiredUriUrl>, cookieSyncCallback: () => Promise<void>): void;
