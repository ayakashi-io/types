import { IBrowserInstance } from "./launcher";
import { Target } from "./createTarget";
export interface IHeadlessChrome {
    chromeInstance: IBrowserInstance | null;
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
        protocolPort: number;
    }) => Promise<void>;
    close: () => Promise<void>;
    createTarget: () => Promise<Target | null>;
    destroyTarget: (targetId: string, browserContextId: string | null) => Promise<void>;
}
export declare function getInstance(): IHeadlessChrome;
