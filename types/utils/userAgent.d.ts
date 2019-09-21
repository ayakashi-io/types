import { EmulatorOptions } from "../runner/parseConfig";
export declare function getUserAgentData(agent: EmulatorOptions["userAgent"] | undefined, platform: EmulatorOptions["platform"] | undefined): {
    userAgent: string;
    platform: string;
    vendor: string;
};
