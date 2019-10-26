import { Cookie } from "tough-cookie";
import { CookieJar } from "@ayakashi/request/core";
export declare function getCookieJar(port: number, options: {
    persistentSession: boolean;
}): Promise<{
    jar: CookieJar;
    cookies: Cookie[];
}>;
export declare function updateCookieJar(port: number, memJar: CookieJar, options: {
    persistentSession: boolean;
}): Promise<void>;
