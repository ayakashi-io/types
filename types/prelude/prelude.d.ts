import { IConnection } from "../engine/createConnection";
import { IMetaActions } from "./actions/meta";
import { ISelectActions } from "./actions/select";
import { ExtractorFn, IExtractActions } from "./actions/extract";
import { IYieldActions } from "./actions/yield";
import { IRequestActions } from "./actions/request";
import { ICookieActions } from "./actions/cookies";
import { IDomProp } from "./query/query";
import { Query, QueryOptions } from "../domQL/domQL";
import { IRetryActions } from "./actions/retry";
export interface IAyakashiInstance extends IRetryActions, IRequestActions, IYieldActions, IExtractActions, ISelectActions, IMetaActions, ICookieActions {
    propRefs: {
        [key: string]: IDomProp;
    };
    __connection: IConnection;
    extractors: {
        [key: string]: () => Promise<void>;
    };
}
export declare type AyakashiPage = {
    propTable: {
        [key: string]: {
            matches: HTMLElement[];
        };
    };
    extractors: {
        [key: string]: ExtractorFn;
    };
    preloaders: {
        domQL: {
            domQuery: (q: Query, opts?: QueryOptions) => HTMLElement[];
        };
        getNodeSelector: (el: HTMLElement) => string;
    };
    paused: boolean;
    resume: () => void;
    document: Document;
    window: Window;
};
declare global {
    interface Window {
        ayakashi: AyakashiPage;
    }
}
export declare function prelude(connection: IConnection): Promise<IAyakashiInstance>;
