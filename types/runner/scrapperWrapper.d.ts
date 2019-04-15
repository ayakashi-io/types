import { EmulatorOptions } from "../engine/createConnection";
declare module "../prelude/prelude" {
    interface IAyakashiInstance {
        /**
         * Yields extracted data from a scrapper to the next step of the pipeline.
         * Learn more about yield in this example: http://ayakashi.io/guide/building-a-complete-scraping-project.html
         * ```js
        ayakashi.select("myDivProp").where({id: {eq: "myDiv"}});
        const result = await ayakashi.extract("myDivProp");
        await ayakashi.yield(result);
        ```
        */
        yield: (extracted: object | Promise<object>) => Promise<void>;
        /**
         * Sugar method to yield multiple matches.
         * Learn more about yield in this example: http://ayakashi.io/guide/building-a-complete-scraping-project.html
         * ```js
        await ayakashi.yieldEach(extractedLinks);
        //is the same as
        for (const link of extractedLinks) {
            await ayakashi.yield(extractedLinks);
        }
        ```
        */
        yieldEach: (extracted: object[] | Promise<object[]>) => Promise<void>;
    }
}
declare module "node-dir" {
    function promiseFiles(dir: string): Promise<string[]>;
}
declare type PassedLog = {
    id: string;
    body: {
        input: object;
        params: object;
        config: {
            pipeConsole?: boolean;
            pipeExceptions?: boolean;
            localAutoLoad?: boolean;
            emulatorOptions?: EmulatorOptions;
            simple?: boolean;
        };
        load: {
            extractors?: string[];
            actions?: string[];
            preloaders?: string[] | {
                module: string;
                as?: string;
                waitForDom?: boolean;
            }[];
        };
        module: string;
        connectionConfig: {
            bridgePort: number;
            protocolPort: number;
        };
        saveTopic: string;
        projectFolder: string;
        operationId: string;
        startDate: string;
        procName: string;
    };
};
export default function scrapperWrapper(log: PassedLog): Promise<void>;
export {};
