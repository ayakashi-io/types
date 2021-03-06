/// <reference types="node" />
import { Target } from "./createTarget";
import { EmulatorOptions } from "../runner/parseConfig";
declare type Unsubscriber = () => void;
export declare type ChromeCookie = {
    name: string;
    value: string;
    url?: string;
    domain?: string;
    path?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: "Strict" | "Lax" | "Extended" | "None";
    expires?: number;
};
export interface ICDPClient {
    _ws: {
        readyState: 1 | 2 | 3;
    };
    close: () => Promise<void>;
    Browser: {
        close: () => Promise<void>;
    };
    Network: {
        enable: () => Promise<void>;
        setCookies: (arg: {
            cookies: ChromeCookie[];
        }) => Promise<boolean>;
        getCookies: (arg?: {
            urls?: string[];
        }) => Promise<{
            cookies: ChromeCookie[];
        }>;
    };
    Page: {
        enable: () => Promise<void>;
        loadEventFired: (fn?: () => void) => (() => void);
        domContentEventFired: (fn?: () => void) => (() => void);
        navigate: (options: {
            url: string;
        }) => Promise<void>;
        addScriptToEvaluateOnNewDocument: (arg0: {
            source: string;
        }) => Promise<object>;
        removeScriptToEvaluateOnNewDocument: (scriptId: object) => Promise<void>;
        navigatedWithinDocument: (fn?: () => void) => (() => void);
        frameNavigated: (fn?: () => void) => (() => void);
        stopLoading: () => Promise<void>;
        setBypassCSP: (arg0: {
            enabled: boolean;
        }) => Promise<void>;
    };
    DOM: {
        enable: () => Promise<void>;
        querySelector: (arg: {
            nodeId: number;
            selector: string;
        }) => Promise<{
            nodeId: number;
        }>;
        getDocument: () => Promise<{
            root: any;
        }>;
        focus: (arg: {
            nodeId: number;
        }) => Promise<void>;
    };
    CSS: {
        enable: () => Promise<void>;
    };
    DOMStorage: {
        enable: () => Promise<void>;
    };
    Security: {
        enable: () => Promise<void>;
        setIgnoreCertificateErrors: (arg: {
            ignore: boolean;
        }) => Promise<void>;
    };
    Console: {
        enable: () => Promise<void>;
    };
    Emulation: {
        setDeviceMetricsOverride: (metrics: EmulatorOptions) => Promise<void>;
        setVisibleSize: (size: {
            width: EmulatorOptions["width"];
            height: EmulatorOptions["height"];
        }) => Promise<void>;
        setUserAgentOverride: (arg: {
            userAgent: string;
            acceptLanguage: string;
            platform: string;
        }) => Promise<void>;
    };
    Target: {
        createTarget: (options: {
            url: string;
            browserContextId?: string;
        }) => Promise<{
            targetId: string;
        }>;
        activateTarget: (options: {
            targetId: string;
        }) => Promise<void>;
        closeTarget: (options: {
            targetId: string;
        }) => Promise<void>;
        createBrowserContext: () => Promise<{
            browserContextId: string;
        }>;
        disposeBrowserContext: (options: {
            browserContextId: string;
        }) => Promise<void>;
    };
    Runtime: {
        enable: () => Promise<void>;
        evaluate: (options: {
            expression: string;
            returnByValue: boolean;
            awaitPromise: boolean;
        }) => Promise<{
            result: {
                value: any;
            };
            exceptionDetails?: object;
        }>;
    };
    on: (domainEvent: string, listener: () => void) => Unsubscriber;
    removeListener: (domainEvent: string, listener: () => void) => void;
}
export interface IConnection {
    client: ICDPClient;
    target: Target;
    active: boolean;
    preloaderIds: object[];
    preloaders: string[];
    unsubscribers: Unsubscriber[];
    timeouts: NodeJS.Timeout[];
    intervals: NodeJS.Timeout[];
    namespace: string;
    useNameSpace: (ns: string) => Promise<void>;
    activate: () => Promise<void>;
    release: () => Promise<void>;
    evaluate: <T, U extends any[]>(fn: (this: Window["ayakashi"], ...params: U) => T, ...args: U) => Promise<T>;
    evaluateAsync: <T, U extends any[]>(fn: (this: Window["ayakashi"], ...params: U) => Promise<T>, ...args: U) => Promise<T>;
    injectPreloader: (options: {
        compiled: {
            wrapper: string;
            source: string;
        };
        as: string | null;
        waitForDOM: boolean;
    }) => Promise<void>;
    pipe: {
        console: (listener: (text: string) => void) => void;
        uncaughtException: (listener: (exception: {
            text: string;
            lineNumber: number;
            columnNumber: number;
            stackTrace: Object;
        }) => void) => void;
    };
    mouse: {
        click: (x: number, y: number, options?: {
            button?: "left" | "right" | "middle";
            clickCount?: number;
        }) => Promise<void>;
        move: (x: number, y: number) => Promise<void>;
    };
    touchScreen: {
        tap: (x: number, y: number) => Promise<void>;
    };
    keyBoard: {
        type: (text: string, options?: {
            delay: number;
        }) => Promise<void>;
        press: (key: string, options?: {
            delay: number;
        }) => Promise<void>;
    };
}
export declare function createConnection(target: Target, bridgePort: number, emulatorOptions?: EmulatorOptions): Promise<IConnection>;
export {};
