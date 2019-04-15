export declare type Unsubscriber = () => void;
export declare type Target = {
    tab: ICDPTab;
    active: boolean;
    locked: boolean;
    lockedUntil: number;
    close: () => Promise<void>;
};
export interface ICDPTab {
    description: string;
    devtoolsFrontendUrl: string;
    id: string;
    title: string;
    type: string;
    url: string;
    webSocketDebuggerUrl: string;
}
export declare function createTarget(host: string, port: number): Promise<Target>;
