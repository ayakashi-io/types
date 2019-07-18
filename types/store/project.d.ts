export declare function getOrCreateStoreProjectFolder(projectFolderOrScrapperName: string): Promise<string>;
export declare function hasPreviousRun(projectFolderOrScrapperName: string): Promise<boolean>;
export declare function clearPreviousRun(projectFolderOrScrapperName: string): Promise<boolean>;
export declare function getPipeprocFolder(projectFolderOrScrapperName: string): string;
