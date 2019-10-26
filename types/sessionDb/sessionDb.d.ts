import { Sequelize, Model, BuildOptions } from "sequelize";
import { UserAgentDataType } from "./userAgent";
interface UserAgentData extends Model {
    readonly userAgentData: UserAgentDataType;
}
interface Cookie extends Model {
    readonly id: number;
    readonly key: string;
    readonly value: string;
    readonly expires: number;
    readonly maxAge: number;
    readonly domain: string;
    readonly path: string;
    readonly secure: boolean;
    readonly httpOnly: boolean;
    readonly hostOnly: boolean;
    readonly creation: number;
    readonly lastAccessed: number;
}
export declare type CookieStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Cookie;
};
export declare type UserAgentDataStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserAgentData;
};
export declare function sessionDbInit(storeProjectFolder: string, opts: {
    create: boolean;
}): Promise<{
    sessionDb: Sequelize;
    UserAgentDataModel: UserAgentDataStatic;
    CookieModel: CookieStatic;
}>;
export {};
