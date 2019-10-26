import { Target } from "../engine/createTarget";
import { UserAgentDataType } from "../sessionDb/userAgent";
import { Cookie } from "tough-cookie";
export declare function getBridgeClient(port: number): {
    getTarget: () => Promise<Target | null>;
    getUserAgentData: (input: {
        agent: "random" | "desktop" | "mobile" | "chrome-desktop" | "chrome-mobile" | undefined;
        platform: "Win32" | "MacIntel" | "Linux armv8l" | "Linux armv7l" | "iPad" | "iPhone" | "Linux x86_64" | undefined;
        persistentSession: boolean;
    }) => Promise<UserAgentDataType | null>;
    connectionReleased: (target: Target) => Promise<void>;
    getCookieJar: () => Promise<Cookie[]>;
    updateCookieJar: (cookies: Cookie[]) => Promise<void>;
};
