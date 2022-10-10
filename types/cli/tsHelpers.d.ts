export declare function isTypescriptProject(directory: string): Promise<boolean>;
export declare function getTypescriptRoot(directory: string): Promise<string>;
export declare function getTypescriptDist(directory: string): Promise<string>;
export declare function isTypescriptDistReady(directory: string): Promise<boolean>;
export declare function buildTS(): Promise<void>;
