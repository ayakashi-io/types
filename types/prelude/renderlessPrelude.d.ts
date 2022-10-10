import { IAyakashiInstance, AyakashiPage } from "./prelude";
import { IMetaActions } from "./actions/meta";
import { IJoinActions } from "./actions/join";
import { ISelectActions } from "./actions/select";
import { IExtractActions } from "./actions/extract";
import { IRetryActions } from "./actions/retry";
import { IRequestActions } from "./actions/request";
import { IYieldActions } from "./actions/yield";
import { ICookieActions } from "./actions/cookies";
import { JSDOM } from "jsdom";
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type MetaActionsNoPause = Omit<IMetaActions, "pause">;
declare type MetaActionsNoRegisterAction = Omit<MetaActionsNoPause, "registerAction">;
export interface IRenderlessAyakashiInstance extends IRetryActions, IRequestActions, IYieldActions, IExtractActions, ISelectActions, MetaActionsNoRegisterAction, ICookieActions, IJoinActions {
    propRefs: IAyakashiInstance["propRefs"];
    extractors: IAyakashiInstance["extractors"];
    page: JSDOM;
/**
 * Fetches and loads a page in the renderlessScraper's context.
 * A timeout can be specified (in ms) for slow pages (default 10s).
 * Use a timeout of 0 to disable the timeout.
* ```js
await ayakashi.load("https://ayakashi-io.github.io");
```
*/
    load: (this: IRenderlessAyakashiInstance, url: string, timeout?: number) => Promise<void>;
/**
 * Loads an html fragment in the renderlessScraper's context.
* ```js
await ayakashi.loadHtml("<body>hi</body>");
```
*/
    loadHtml: (this: IRenderlessAyakashiInstance, html: string) => Promise<void>;
    __attachDOM: (this: IRenderlessAyakashiInstance, dom: JSDOM) => Promise<void>;
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
