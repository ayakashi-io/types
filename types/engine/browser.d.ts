/// <reference types="node" />
import { IBrowserInstance } from "./launcher";
import { Target } from "./createTarget";
import { Server } from "http";
export interface IHeadlessChrome {
    chromeInstance: IBrowserInstance | null;
    bridge: Server | null;
    init: (options: {
        chromePath: string;
        headless?: boolean;
        maxTargets?: number;
        launchAttempts?: number;
        autoOpenDevTools?: boolean;
        proxyUrl?: string;
        sessionDir?: string;
        windowWidth?: number;
        windowHeight?: number;
        bridgePort: number;
        protocolPort: number;
    }) => Promise<void>;
    close: () => Promise<void>;
    createTarget: () => Promise<Target | null>;
    destroyTarget: (targetId: string, browserContextId: string | null) => Promise<void>;
}
export declare function getInstance(): IHeadlessChrome;
