declare type PassedLog = {
    id: string;
    body: {
        input: {
            value: unknown;
        };
        params: object;
        module: string;
        saveTopic: string;
        projectFolder: string;
        storeProjectFolder: string;
        operationId: string;
        startDate: string;
        procName: string;
        appRoot: string;
    };
};
export default function scriptWrapper(log: PassedLog): Promise<{
    value: any;
} | undefined>;
export {};
