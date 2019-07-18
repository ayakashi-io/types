export declare function getStoredRevision(): Promise<number>;
export declare function updateStoredRevision(newRevision: number): Promise<void>;
export declare function getChromePath(): Promise<string>;
export declare function isChromiumAlreadyInstalled(): Promise<boolean>;
export declare function cleanChromiumDirectory(): Promise<{}>;
