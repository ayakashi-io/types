import { Express as App } from "express";
export declare function startBridge(port: number): Promise<{
    bridge: App;
    closeBridge: () => Promise<void>;
}>;
