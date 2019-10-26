import { EmulatorOptions } from "../runner/parseConfig";
import { UserAgentDataStatic } from "./sessionDb";
import { Sequelize } from "sequelize";
export declare type UserAgentDataType = {
    userAgent: string;
    platform: string;
    vendor: string;
};
export declare function getUserAgentData(sessionDb: Sequelize, userAgentModel: UserAgentDataStatic, input: {
    agent: EmulatorOptions["userAgent"] | undefined;
    platform: EmulatorOptions["platform"] | undefined;
    persistentSession: boolean;
}): Promise<UserAgentDataType>;
export declare function generate(agent: EmulatorOptions["userAgent"] | undefined, platform: EmulatorOptions["platform"] | undefined): UserAgentDataType;
