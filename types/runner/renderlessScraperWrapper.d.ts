import { EmulatorOptions } from "../runner/parseConfig";
declare type PassedLog = {
    id: string;
    body: {
        input: {
            value: unknown;
        };
        params: object;
        config: {
            pipeConsole?: boolean;
            pipeExceptions?: boolean;
            localAutoLoad?: boolean;
            emulatorOptions?: EmulatorOptions;
            simple?: boolean;
        };
        load: {
            extractors?: string[];
            actions?: string[];
            preloaders?: string[] | {
                module: string;
                as?: string;
                waitForDom?: boolean;
            }[];
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
export default function renderlessScraperWrapper(log: PassedLog): Promise<void>;
export {};
