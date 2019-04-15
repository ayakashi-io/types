export declare function compile(workingDir: string, entry: string, namespace: string, cacheFolder: string): Promise<{
    wrapper: string;
    source: string;
}>;
