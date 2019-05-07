import { EmulatorOptions } from "../engine/createConnection";
declare module "node-dir" {
    function promiseFiles(dir: string): Promise<string[]>;
}
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
        projectFolder: string;
        operationId: string;
        startDate: string;
        procName: string;
        appRoot: string;
    };
};
export default function scrapperWrapper(log: PassedLog): Promise<void>;
export {};
