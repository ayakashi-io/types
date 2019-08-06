import { EmulatorOptions } from "../engine/createConnection";
declare type PassedLog = {
    id: string;
    body: {
        input: object;
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
            protocolPort: number;
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
export default function scraperWrapper(log: PassedLog): Promise<void>;
export {};
