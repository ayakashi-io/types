/// <reference types="node" />
import { ChildProcess } from "child_process";
export interface IBrowserInstance {
    pid: number;
    port: number;
    process: ChildProcess;
    forceKill: () => Promise<unknown>;
}
export declare function launch(passedFlags: string[], options: {
    chromePath: string;
    sessionDir: string;
    protocolPort: number;
}): Promise<IBrowserInstance>;
