import { Config } from "../runner/parseConfig";
export declare function getOrCreateStoreProjectFolder(projectFolderOrScraperName: string): Promise<string>;
export declare function hasPreviousRun(projectFolderOrScraperName: string): Promise<boolean>;
export declare function clearPreviousRun(projectFolderOrScraperName: string): Promise<void>;
export declare function getPipeprocFolder(projectFolderOrScraperName: string): string;
export declare function saveLastConfig(config: Config, storeProjectFolder: string): Promise<void>;
export declare function getLastConfig(storeProjectFolder: string): Promise<string>;
export declare function configChanged(config: Config, storeProjectFolder: string): Promise<boolean>;
