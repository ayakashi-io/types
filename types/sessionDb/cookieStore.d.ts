import { Store, Cookie } from "tough-cookie";
import { Sequelize } from "sequelize";
import { CookieStatic } from "./sessionDb";
export interface DbCookieStore extends Store {
    sessionDb: Sequelize;
    CookieModel: CookieStatic;
}
export declare class DbCookieStore extends Store {
    constructor(sessionDb: Sequelize, CookieModel: CookieStatic);
    findCookie(domain: string, path: string, key: string, cb: (err: null | Error, cookie: Cookie | null) => void): void;
    findCookies(domain: string, path: string, cb: (err: null | Error, cookies: Cookie[]) => void): void;
    putCookie(cookie: Cookie, callback: (err: null | Error) => void): void;
    updateCookie(oldCookie: Cookie, newCookie: Cookie, cb: (err: null | Error) => void): void;
    removeCookie(domain: string, path: string, key: string, cb: (err: null | Error) => void): void;
    removeCookies(domain: string, path: string, cb: (err: null | Error) => void): void;
    removeAllCookies(cb: (err: null | Error) => void): void;
    getAllCookies(cb: (err: null | Error, cookies: Cookie[]) => void): void;
}
