import { IAyakashiInstance, AyakashiPage } from "./prelude";
import { JSDOM } from "jsdom";
export interface IRenderlessAyakashiInstance {
    propRefs: IAyakashiInstance["propRefs"];
    extractors: IAyakashiInstance["extractors"];
    prop: IAyakashiInstance["prop"];
    evaluate: IAyakashiInstance["evaluate"];
    evaluateAsync: IAyakashiInstance["evaluateAsync"];
    defineProp: IAyakashiInstance["defineProp"];
    registerExtractor: IAyakashiInstance["registerExtractor"];
    select: IAyakashiInstance["select"];
    selectFirst: IAyakashiInstance["selectFirst"];
    selectOne: IAyakashiInstance["selectOne"];
    selectLast: IAyakashiInstance["selectLast"];
    extract: IAyakashiInstance["extract"];
    retry: IAyakashiInstance["retry"];
    yield: IAyakashiInstance["yield"];
    yieldEach: IAyakashiInstance["yieldEach"];
    recursiveYield: IAyakashiInstance["recursiveYield"];
    recursiveYieldEach: IAyakashiInstance["recursiveYieldEach"];
    page: JSDOM;
/**
 * Fetches and loads a page in the renderlessScrapper's context.
 * A timeout can be specified (in ms) for slow pages (default 10s).
 * Use a timeout of 0 to disable the timeout.
* ```js
await ayakashi.load("https://ayakashi.io");
```
*/
    load: (this: IRenderlessAyakashiInstance, url: string, timeout?: number) => Promise<void>;
    __attachDOM: (this: IRenderlessAyakashiInstance, dom: JSDOM) => void;
    __connection: {
        release: () => Promise<void>;
    };
}
declare module JSDOM {
    interface DOMWindow {
        ayakashi: AyakashiPage;
    }
}
export declare function renderlessPrelude(): Promise<IRenderlessAyakashiInstance>;
export {};
