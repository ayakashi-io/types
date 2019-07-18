declare type Manifest = {
    chromium: {
        revision: number;
    };
    ayakashi: {
        version: string;
    };
};
export declare function getManifest(): Promise<Manifest>;
export {};
