/**
 * Emulation options for the scraper to use.
 */
export declare type EmulatorOptions = {
/**
 * Sets the available width.
 */
    width?: number;
/**
 * Sets the available height.
 */
    height?: number;
/**
 * Set it to true to emulate a mobile device.
 */
    mobile?: boolean;
    deviceScaleFactor?: 0;
/**
 * Configures the userAgent for this scraper.
 * By default a random chrome-desktop userAgent is used.
 */
    userAgent?: "random" | "desktop" | "mobile" | "chrome-desktop" | "chrome-mobile";
/**
 * Configures the language for this scraper.
 * It will be applied as the browser's language and on the Accept-Language header on HTTP requests.
 * Defaults to "en-US".
 */
    acceptLanguage?: string;
/**
 * Configures the value navigator.platform should return.
 * Defaults to "Win32" for desktop and "Linux armv8l" for mobile.
 * Setting a custom platform will also affect the generated userAgent.
 */
    platform?: "Win32" | "MacIntel" | "Linux armv8l" | "Linux armv7l" | "iPad" | "iPhone" | "Linux x86_64";
};
declare type StepConfig = {
/**
 * Set it to `false` to disable the page console logs from getting printed.
 */
    pipeConsole?: boolean;
/**
 * Set it to `false` to disable any page uncaught exceptions from getting printed.
 */
    pipeExceptions?: boolean;
/**
 * Set it to `false` to disable automatic loading of local `actions`, `extractors`, `preloaders` and `props`
 */
    localAutoLoad?: boolean;
/**
 * Emulation options for the scraper to use.
 */
    emulatorOptions?: EmulatorOptions;
/**
 * Used by the `--simple` run mode. For internal use only.
 */
    simple?: boolean;
/**
 * How many times to retry the step if there is an error.
 * Learn more about retries at https://ayakashi.io/docs/going_deeper/automatic_retries.html
 * No retries are performed by default.
 */
    retries?: number;
};
declare type StepLoadingOptions = {
/**
 * An array of external extractor modules.
 */
    extractors?: string[];
/**
 * An array of external action modules.
 */
    actions?: string[];
/**
 * An array of external preloader modules.
 */
    preloaders?: (string | {
    /**
     * The preloader's module name
     */
        module: string;
    /**
     * Set a custom name for the preloader
     */
        as?: string;
    /**
     * Set it to `true` to wait for the DOM to be ready before loading the preloader.
     */
        waitForDom?: boolean;
    })[];
};
export declare type Config = {
/**
 * Global configuration options.
 */
    config?: {
    /**
     * Setting it to `false` will disable headless mode.
     */
        headless?: boolean;
    /**
     * Sets a proxy url for all scrapers.
     */
        proxyUrl?: string;
    /**
     * Automatically open devTools for every tab.
     * `headless` must be `false` for it to have any effect.
     */
        openDevTools?: boolean;
    /**
     * Persists the session data of all pages instead of using a temporary session each time.
     * Learn more here https://ayakashi.io./docs/going_deeper/persisting-sessions.html
     */
        persistentSession?: boolean;
    /**
     * Sets the width of the browser window. Default is 1920.
     */
        windowWidth?: number;
    /**
     * Sets the height of the browser window. Default is 1080.
     */
        windowHeight?: number;
    /**
     * Use a custom chrome/chromium executable instead of the auto-downloaded one.
     * Learn more here: https://ayakashi.io/docs/going_deeper/using-a-different-chrome.html
     */
        chromePath?: string;
    /**
     * Ignore all certificate (ssl) errors.
     */
        ignoreCertificateErrors?: boolean;
    /**
     * Sets the port of the internal bridge server, default is 9731. Use 0 for a random port.
     */
        bridgePort?: number;
    /**
     * Sets the port of the internal devTools protocol server, default is 9730. Use 0 for a random port.
     */
        protocolPort?: number;
    /**
     * Sets the number of workers to use.
     * Defaults to "auto" which will spawn as many workers as needed by the current pipeline (not more than the total system thread count).
     */
        workers?: number;
    /**
     * Sets the number of steps each worker can execute at the same time.
     * Defaults to 1. It should only be increased if there are more parallel steps than the worker count and the steps are mostly I/O bound.
     */
        workerConcurrency?: number;
    };
/**
 * Execute the steps in a serial manner by passing each step's output to next one's input.
 */
    waterfall?: {
    /**
     * The type of the step.
     */
        type: "scraper" | "renderlessScraper" | "apiScraper" | "script";
    /**
     * The name of the module.
     */
        module: string;
    /**
     * A custom parameters object to pass to the module.
     */
        params?: object;
    /**
     * Step configuration.
     */
        config?: StepConfig;
    /**
     * Specify external modules that should be loaded by the scraper.
     */
        load?: StepLoadingOptions;
    /**
     * Execute the steps in parallel by passing the parent's input to all of the children.
     */
        parallel?: {
        /**
         * The type of the step.
         */
            type: "scraper" | "renderlessScraper" | "apiScraper" | "script";
        /**
         * The name of the module.
         */
            module: string;
        /**
         * A custom parameters object to pass to the module.
         */
            params?: object;
        /**
         * Step configuration.
         */
            config?: StepConfig;
        /**
         * Specify external modules that should be loaded by the scraper.
         */
            load?: StepLoadingOptions;
        }[];
    }[];
/**
 * Execute the steps in parallel by passing the parent's input to all of the children.
 */
    parallel?: {
    /**
     * The type of the step.
     */
        type: "scraper" | "renderlessScraper" | "apiScraper" | "script";
    /**
     * The name of the module.
     */
        module: string;
    /**
     * A custom parameters object to pass to the module.
     */
        params?: object;
    /**
     * Step configuration.
     */
        config?: StepConfig;
    /**
     * Specify external modules that should be loaded by the scraper.
     */
        load?: StepLoadingOptions;
    /**
     * Execute the steps in a serial manner by passing each step's output to next one's input.
     */
        waterfall?: {
        /**
         * The type of the step.
         */
            type: "scraper" | "renderlessScraper" | "apiScraper" | "script";
        /**
         * The name of the module.
         */
            module: string;
        /**
         * A custom parameters object to pass to the module.
         */
            params?: object;
        /**
         * Step configuration.
         */
            config?: StepConfig;
        /**
         * Specify external modules that should be loaded by the scraper.
         */
            load?: StepLoadingOptions;
        }[];
    }[];
};
export declare type ProcGenerator = {
    name: string;
    from: string;
    to: string | string[];
    processor: Function | string;
    config: StepConfig;
};
export declare function firstPass(config: Config, previous?: string): (string | string[])[];
export declare function checkStepLevels(steps: (string | string[])[]): void;
export declare function validateStepFormat(steps: (string | string[])[]): void;
export declare function countSteps(steps: (string | string[])[]): number;
export declare function isUsingNormalScraper(steps: (string | string[])[], config: Config): boolean;
export declare function hasTypo(steps: (string | string[])[], config: Config): boolean;
export declare function getObjectReference(config: Config, stepName: string): {
    type?: string;
    module?: string;
    config?: StepConfig;
};
export declare function createProcGenerators(config: Config, steps: (string | string[])[], options: {
    bridgePort: number;
    protocolPort: number;
    persistentSession: boolean;
    projectFolder: string;
    operationId: string;
    storeProjectFolder: string;
    startDate: string;
}): {
    procGenerators: ProcGenerator[];
    initializers: string[];
};
export {};
