import { IAyakashiInstance } from "../prelude/prelude";
import { IDomProp } from "../prelude/query/query";
declare module "../prelude/prelude" {
    interface IAyakashiInstance {
        /**
         * Waits for a specified amount of ms.
         * ```js
        await ayakashi.wait(3000);
        ```
        */
        wait: (timeout?: number) => Promise<void>;
        /**
         * Waits by executing the callback until it returns a truthy value in a set interval.
         * The interval parameter can configure the callback execution interval (default 100ms).
         * A timeout can be specified (in ms) to throw an error if the time is exceeded (default 10s).
         * ```js
        await ayakashi.waitUntil(function() {
            return ayakashi.evaluate(function() {
                //check for something in the page
            });
        });
        ```
        */
        waitUntil: <T>(cb: () => Promise<T>, interval?: number, timeout?: number) => Promise<T>;
        /**
         * Waits for the load event of a new page.
         * Learn more at https://ayakashi.io/docs/going_deeper/page-navigation.html#using-the-raw-events
        */
        waitForLoadEvent: (timeout?: number) => Promise<void>;
        /**
         * Waits for the domContentLoaded event of a new page.
         * Learn more at https://ayakashi.io/docs/going_deeper/page-navigation.html#using-the-raw-events
        */
        waitForDomContentLoadedEvent: (timeout?: number) => Promise<void>;
        /**
         * Waits for an in-page navigation to occur in a dynamic page or single page application.
         * Learn more at https://ayakashi.io/docs/going_deeper/page-navigation.html#using-the-raw-events
        */
        waitForInPageNavigation: (timeout?: number) => Promise<void>;
        /**
         * Waits until a prop exists on the page by re-evaluating its query until it finds a match.
         * A timeout can be specified (in ms) to throw an error if the time is exceeded (default 10s).
         * Use a timeout of 0 to disable the timeout.
         * ```js
        ayakashi
            .select("myProp")
            .where({class: {eq: "dynamicContainer"}});
        await ayakashi.waitUntilExists("myProp");
        ```
        */
        waitUntilExists: (prop: IDomProp | string, timeout?: number) => Promise<void>;
        /**
         * Waits until a prop exists on the page and is also visible.
         * A timeout can be specified (in ms) to throw an error if the time is exceeded (default 10s).
         * Use a timeout of 0 to disable the timeout.
         * ```js
        ayakashi
            .select("myProp")
            .where({class: {eq: "dynamicContainer"}});
        await ayakashi.waitUntilVisible("myProp");
        ```
        */
        waitUntilVisible: (prop: IDomProp | string, timeout?: number) => Promise<void>;
    }
}
export default function (ayakashiInstance: IAyakashiInstance): void;
