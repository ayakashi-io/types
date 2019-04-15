import { IAyakashiInstance } from "../prelude/prelude";
import { IDomProp } from "../prelude/query/query";
declare module "../prelude/prelude" {
    interface IAyakashiInstance {
        /**
         * Navigates to a new page and waits for the document to load.
         * A timeout can be specified (in ms) for slow pages (default 10s).
         * Use a timeout of 0 to disable the timeout.
         * Learn more at https://ayakashi.io/docs/going_deeper/page-navigation.html#standard-navigation
         * ```js
        await ayakashi.goTo("https://ayakashi.io");
        ```
        */
        goTo: (url: string, timeout?: number) => Promise<void>;
        /**
         * Clicks on a prop to navigate to a new page.
         * It should be used instead of click() so the new page can properly load.
         * A timeout can be specified (in ms) for slow pages (default 10s).
         * Use a timeout of 0 to disable the timeout.
         * Learn more at https://ayakashi.io/docs/going_deeper/page-navigation.html#click-to-navigate
         * ```js
        ayakashi
            .select("myLink")
            .where({id: {eq: "theLink"}});
        await ayakashi.navigationClick("myLink");
        ```
        */
        navigationClick: (prop: IDomProp | string, timeout?: number) => Promise<void>;
        /**
         * Clicks on a prop that changes the view in a dynamic page or single page application.
         * It should be used instead of click() so the view can properly load.
         * It will not reload the page like navigationClick().
         * A timeout can be specified (in ms) for slow pages (default 10s).
         * Use a timeout of 0 to disable the timeout.
         * Learn more at https://ayakashi.io/docs/going_deeper/page-navigation.html#single-page-application-spa-navigation
         * ```js
        ayakashi
            .select("inPageLink")
            .where({id: {eq: "theLink"}});
        await ayakashi.spaNavigationClick("inPageLink");
        ```
        */
        spaNavigationClick: (prop: IDomProp | string, timeout?: number) => Promise<void>;
    }
}
export default function (ayakashiInstance: IAyakashiInstance): void;
