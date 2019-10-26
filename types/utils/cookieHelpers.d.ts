import { Cookie } from "tough-cookie";
import { CookieJar } from "@ayakashi/request/core";
import { ChromeCookie } from "../engine/createConnection";
export declare function getAllCookiesFromRequestJar(requestjar: CookieJar): Cookie[];
export declare function toChromeCookies(cookies: Cookie[]): ChromeCookie[];
export declare function toRequestCookies(cookies: ChromeCookie[]): Cookie[];
export declare function getCookieUrl(cookie: Cookie): string;
export declare function toCookieString(cookie: Cookie): string;
