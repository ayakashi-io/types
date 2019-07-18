declare type PassedLog = {
    id: string;
    body: {
        input: object;
        params: object;
        config: {
            simple?: boolean;
        };
        module: string;
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
export default function apiScrapperWrapper(log: PassedLog): Promise<void>;
export {};
