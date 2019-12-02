import { IAyakashiInstance } from "../prelude/prelude";
import { IRenderlessAyakashiInstance } from "../prelude/renderlessPrelude";
import { IConnection } from "../engine/createConnection";
declare module "node-dir" {
    function promiseFiles(dir: string): Promise<string[]>;
}
export declare function loadLocalProps(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance, projectFolder: string): void;
export declare function loadLocalActions(ayakashiInstance: IAyakashiInstance, projectFolder: string): void;
export declare function loadLocalExtractors(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance, projectFolder: string): void;
export declare function loadLocalPreloaders(connection: IConnection, projectFolder: string, storeProjectFolder: string): Promise<void>;
export declare function loadExternalActions(ayakashiInstance: IAyakashiInstance, projectFolder: string, actions?: string[]): void;
export declare function loadExternalExtractors(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance, projectFolder: string, extractors?: string[]): void;
export declare function loadExternalPreloaders(connection: IConnection, projectFolder: string, storeProjectFolder: string, preloaders?: string[] | {
    module: string;
    as?: string;
    waitForDom?: boolean;
}[]): Promise<void>;
