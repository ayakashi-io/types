import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
import { IApiAyakashiInstance } from "../apiPrelude";
import { CookieJar } from "@ayakashi/request";
import { IConnection } from "../../engine/createConnection";
declare type CookieFilter = {
    key?: string;
    domain?: string;
    path?: string;
    url?: string;
};
declare type SerializedCookie = {
    key: string;
    value: string;
    domain: string;
    path: string;
    creation: string;
    expires?: string;
    secure?: boolean;
    httpOnly?: boolean;
    hostOnly?: boolean;
    lastAccessed?: string;
};
declare type NewCookie = {
    key: string;
    value: string;
    domain: string;
    path: string;
    expires?: string;
    secure?: boolean;
    httpOnly?: boolean;
    hostOnly?: boolean;
};
export interface ICookieActions {
/**
 * Get a single cookie that passes the filter.
 * Learn more here: https://ayakashi-io.github.io/docs/going_deeper/manipulating-cookies.html#manual-cookie-manipulation
* ```js
const cookie = await ayakashi.getCookie({ //filter object
    key: "myKey" //optional,
    domain: "somepage.com" //optional,
    path: "/test" //optional,
    url: "https://somepage.com" //optional
});
```
*/
    getCookie: (filter?: CookieFilter) => Promise<SerializedCookie | null>;
/**
 * Get multiple cookies that pass the filter.
 * Learn more here: https://ayakashi-io.github.io/docs/going_deeper/manipulating-cookies.html#manual-cookie-manipulation
* ```js
const cookies = await ayakashi.getCookies({ //filter object
    key: "myKey" //optional,
    domain: "somepage.com" //optional,
    path: "/test" //optional,
    url: "https://somepage.com" //optional
});
```
*/
    getCookies: (filter?: CookieFilter) => Promise<SerializedCookie[]>;
/**
 * Set a single cookie.
 * Learn more here: https://ayakashi-io.github.io/docs/going_deeper/manipulating-cookies.html#manual-cookie-manipulation
* ```js
await ayakashi.setCookie({
    key: "myCookie",
    value: "test",
    domain: "somepage.com",
    path: "/",
    expires: "2029-10-25T17:29:23.375Z", //optional
    secure: true, //optional
    httpOnly: true, //optional
    hostOnly: false //optional
});
```
*/
    setCookie: (cookie: NewCookie) => Promise<void>;
/**
 * Set multiple cookies.
 * Learn more here: https://ayakashi-io.github.io/docs/going_deeper/manipulating-cookies.html#manual-cookie-manipulation
* ```js
await ayakashi.setCookies([{
    key: "myCookie",
    value: "test",
    domain: "somepage.com",
    path: "/",
    expires: "2029-10-25T17:29:23.375Z", //optional
    secure: true, //optional
    httpOnly: true, //optional
    hostOnly: false //optional
}, {
    key: "myCookie2",
    value: "someValue",
    domain: "anotherpage.com",
    path: "/"
}]);
```
*/
    setCookies: (cookies: NewCookie[]) => Promise<void>;
}
export declare function attachCookieActions(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance | IApiAyakashiInstance, memJar: CookieJar, connection: IConnection | null, cookieSyncCallback: () => Promise<void>): void;
export {};
