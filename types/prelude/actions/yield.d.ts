import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
import { IApiAyakashiInstance } from "../apiPrelude";
import { IPipeProcClient } from "pipeproc";
export interface IYieldActions {
/**
 * Yields extracted data from a scraper to the next step of the pipeline.
 * Learn more about yield here: https://ayakashi-io.github.io/docs/going_deeper/yielding-data.html
* ```js
ayakashi.select("myDivProp").where({id: {eq: "myDiv"}});
const result = await ayakashi.extract("myDivProp");
await ayakashi.yield(result);
```
*/
    yield: <T>(extracted: T | Promise<T>) => Promise<void>;
/**
 * Yields multiple extractions individually in a single (atomic) operation.
 * The next step of the pipeline will run for each extraction.
 * Learn more about yieldEach here: https://ayakashi-io.github.io/docs/going_deeper/yielding-data.html
* ```js
await ayakashi.yieldEach(extractedLinks);
//is kinda like this
for (const link of extractedLinks) {
    await ayakashi.yield(link);
}
//but ensures the yields are performed as a single unit
```
*/
    yieldEach: <T>(extracted: T[] | Promise<T[]>) => Promise<void>;
/**
 * Recursively re-run the scraper by yielding the extracted data to itself.
 * The data will be available in the input object.
 * Learn more about recursiveYield here: https://ayakashi-io.github.io/docs/going_deeper/yielding-data.html
*/
    recursiveYield: <T>(extracted: T | Promise<T>) => Promise<void>;
/**
 * Recursively re-run the scraper by yielding multiple extractions individually in a single (atomic) operation.
 * The data will be available in the input object.
 * Learn more about recursiveYieldEach here: https://ayakashi-io.github.io/docs/going_deeper/yielding-data.html
*/
    recursiveYieldEach: <T>(extracted: T[] | Promise<T[]>) => Promise<void>;
}
export declare function attachYields(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance | IApiAyakashiInstance, pipeprocClient: IPipeProcClient, saveTopic: string, selfTopic: string, yieldWatcher: {
    yieldedAtLeastOnce: boolean;
}): void;
