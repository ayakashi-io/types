/// <reference types="node" />
import { IBrowserInstance } from "./launcher";
import { Target } from "./createTarget";
import { Server } from "http";
export interface IHeadlessChrome {
    chromeInstance: IBrowserInstance | null;
    bridge: Server | null;
    targets: Target[];
    maxTargets: number;
    getAvailableTarget: () => Promise<Target | null>;
    init: (options: {
        chromePath: string;
        headless?: boolean;
        maxTargets?: number;
        launchAttempts?: number;
        ignoreCertificateErrors?: boolean;
        userAgent?: string;
        autoOpenDevTools?: boolean;
        proxyUrl?: string;
        sessionDir?: string;
        windowWidth?: number;
        windowHeight?: number;
        bridgePort: number;
        protocolPort: number;
    }) => Promise<void>;
    close: () => Promise<void>;
    createTarget: (overrideMaxTargets?: boolean) => Promise<Target | null>;
    collectDeadTargets: () => Promise<void>;
}
export declare function getInstance(): IHeadlessChrome;
