import { EmulatorOptions } from "../runner/parseConfig";
declare type PassedLog = {
    id: string;
    body: {
        input: {
            value: unknown;
        };
        params: object;
        config: {
            simple?: boolean;
            emulatorOptions?: EmulatorOptions;
        };
        module: string;
        connectionConfig: {
            bridgePort: number;
        };
        saveTopic: string;
        selfTopic: string;
        projectFolder: string;
        storeProjectFolder: string;
        persistentSession: boolean;
        operationId: string;
        startDate: string;
        procName: string;
        appRoot: string;
        userAgent?: string;
        proxyUrl?: string;
        ignoreCertificateErrors: boolean;
    };
};
export default function apiScraperWrapper(log: PassedLog): Promise<void>;
export {};
