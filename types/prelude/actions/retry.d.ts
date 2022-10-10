import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
import { IApiAyakashiInstance } from "../apiPrelude";
export interface IRetryActions {
/**
 * Retry an async operation.
 * Default is 10 retries.
 * If the operation returns a result, that result will also be returned by retry.
 * Learn more about retries at: https://ayakashi-io.github.io/docs/going_deeper/automatic_retries.html
* ```js
await ayakashi.retry(async function() {
    await ayakashi.goTo("https://github.com/ayakashi-io/ayakashi");
}, 5);
```
*/
    retry: <T>(task: (currentRetry: number) => Promise<T>, retries?: number) => Promise<T>;
}
export declare function attachRetry(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance | IApiAyakashiInstance): void;
