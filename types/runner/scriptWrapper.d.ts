declare type PassedLog = {
    id: string;
    body: {
        input: object;
        params: object;
        module: string;
        saveTopic: string;
        projectFolder: string;
        operationId: string;
        startDate: string;
        procName: string;
        appRoot: string;
    };
};
export default function scriptWrapper(log: PassedLog): Promise<any>;
export {};
