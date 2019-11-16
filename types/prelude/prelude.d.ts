import { IConnection } from "../engine/createConnection";
import { IMetaActions } from "./actions/meta";
import { IJoinActions } from "./actions/join";
import { ISelectActions } from "./actions/select";
import { ExtractorFn, IExtractActions } from "./actions/extract";
import { IYieldActions } from "./actions/yield";
import { IRequestActions } from "./actions/request";
import { ICookieActions } from "./actions/cookies";
import { IDomProp } from "./query/query";
import { Query, QueryOptions } from "../domQL/domQL";
import { IRetryActions } from "./actions/retry";
export interface IAyakashiInstance extends IRetryActions, IRequestActions, IYieldActions, IExtractActions, ISelectActions, IMetaActions, ICookieActions, IJoinActions {
    propRefs: {
        [key: string]: IDomProp;
    };
    __connection: IConnection;
    extractors: {
        [key: string]: () => Promise<void>;
    };
}
export interface IPreloaders {
    domQL: {
        domQuery: (q: Query, opts?: QueryOptions) => HTMLElement[];
    };
    getNodeSelector: (el: HTMLElement) => string;
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
    preloaders: IPreloaders;
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
