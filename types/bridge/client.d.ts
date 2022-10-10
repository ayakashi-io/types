import { Target } from "../engine/createTarget";
import { UserAgentDataType } from "../sessionDb/userAgent";
import { EmulatorOptions } from "../runner/parseConfig";
import { Cookie } from "tough-cookie";
export declare function getBridgeClient(port: number): {
    getTarget: () => Promise<Target | null>;
    getUserAgentData: (input: {
        agent: EmulatorOptions["userAgent"] | undefined;
        platform: EmulatorOptions["platform"] | undefined;
        persistentSession: boolean;
    }) => Promise<UserAgentDataType | null>;
    connectionReleased: (target: Target) => Promise<void>;
    getCookieJar: () => Promise<Cookie[]>;
    updateCookieJar: (cookies: Cookie[]) => Promise<void>;
};
