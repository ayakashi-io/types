export declare function compile(workingDir: string, entry: string, namespace: string, cacheFolder: string, noCache?: boolean): Promise<{
    wrapper: string;
    source: string;
}>;
