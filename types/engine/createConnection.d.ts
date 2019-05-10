/// <reference types="node" />
import { Unsubscriber, ICDPTab } from "./createTarget";
/**
 * Emulation options for the scrapper to use.
 */
export declare type EmulatorOptions = {
    /**
     * Sets the available width.
     */
    width: number;
    /**
     * Sets the available height.
     */
    height: number;
    /**
     * Set it to true to emulate a mobile device.
     */
    mobile: boolean;
    deviceScaleFactor: 0;
};
interface ICDPClient {
    close: () => Promise<void>;
    Browser: {
        close: () => Promise<void>;
    };
    Network: {
        enable: () => Promise<void>;
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
    };
    Console: {
        enable: () => Promise<void>;
    };
    Emulation: {
        setDeviceMetricsOverride: (metrics: EmulatorOptions) => void;
        setVisibleSize: (size: {
            width: EmulatorOptions["width"];
            height: EmulatorOptions["height"];
        }) => void;
    };
    Target: {
        activateTarget: (options: {
            targetId: string;
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
    tab: ICDPTab;
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
    evaluate: <T>(fn: (...args: any[]) => T, ...args: any[]) => Promise<T>;
    evaluateAsync: <T>(fn: (...args: any[]) => Promise<T>, ...args: any[]) => Promise<T>;
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
export declare function createConnection(tab: ICDPTab, bridgePort: number, emulatorOptions?: EmulatorOptions): Promise<IConnection>;
export {};
