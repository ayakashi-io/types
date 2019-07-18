import { ICDPClient } from "./createConnection";
export declare type Target = {
    targetId: string;
    webSocketDebuggerUrl: string;
    browserContextId: string | null;
};
export declare function createTarget(host: string, port: number, masterConnection: ICDPClient, inNewContext: boolean): Promise<Target>;
