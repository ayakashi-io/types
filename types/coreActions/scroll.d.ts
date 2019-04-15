import { IAyakashiInstance } from "../prelude/prelude";
import { IDomProp } from "../prelude/query/query";
declare module "../prelude/prelude" {
    interface IAyakashiInstance {
        /**
         * Scrolls a prop into view.
         * ```js
        ayakashi.selectOne("myButtonProp").where({class: {eq: "btn"}});
        await ayakashi.scrollIntoView("myButtonProp");
        ```
        */
        scrollIntoView: (prop: IDomProp | string) => Promise<void>;
        /**
         * Scrolls inside a scrollable prop by an amount of pixels.
         * If no pixels are specified it will scroll to the bottom of the prop.
         * Works for props with a static height.
         * Check the scrollInUntilBottomIsReached() and infiniteScrollIn() actions If the prop loads more content and expands dynamically as it is being scrolled.
         * ```js
        ayakashi.selectOne("myScrollableDiv").where({class: {eq: "scrollableList"}});
        await ayakashi.scrollIn("myScrollableDiv");
        ```
        */
        scrollIn: (prop: IDomProp | string, pixelsToScroll?: number) => Promise<number>;
        /**
         * Scrolls inside a scrollable prop until its bottom is reached.
         * Works with props that load more content and expand dynamically as they are being scrolled.
         * The scrolling interval can be controlled with the interval parameter.
         * A timeout can be specified (in ms) to throw an error if the time is exceeded (default 10s) and the bottom is still not reached.
         * Use a timeout of 0 to disable the timeout.
         * ```js
        ayakashi.selectOne("myDynamicScrollableDiv").where({class: {eq: "scrollableList"}});
        await ayakashi.scrollInUntilBottomIsReached("myDynamicScrollableDiv");
        ```
        */
        scrollInUntilBottomIsReached: (prop: IDomProp | string, scrollInterval?: number, timeout?: number) => Promise<void>;
        /**
         * Infinitely scrolls inside a scrollable prop.
         * Works with props that load more content and expand dynamically as they are being scrolled.
         * A callback can be triggered on each scrolling interval to extract data as we scroll.
         * The scrolling interval can be controlled with the interval option (default 1s).
         * The pixels to scroll each time can be controlled with the pixelsToScroll option.
         * If no pixelsToScroll is provided it will scroll to the (current) bottom of the prop.
         * The scrolling can be stopped with the stopScrollingAfter option (in ms) or if the final bottom is reached and no more content is available.
         * ```js
        ayakashi.selectOne("myInfiniteScrollableDiv").where({class: {eq: "scrollableList"}});
        await ayakashi.infiniteScrollIn("myInfiniteScrollableDiv", {
            cb: function(currentHeight) {
                console.log("scrolling infinitely");
                console.log("current height", currentHeight);
                //let data flow in as we scroll
            }
        });
        ```
        */
        infiniteScrollIn: (prop: IDomProp | string, options?: {
            pixelsToScroll?: number;
            stopScrollingAfter?: number;
            scrollInterval?: number;
            cb?: (currentHeight: number) => Promise<void>;
        }) => Promise<void>;
    }
}
export default function (ayakashiInstance: IAyakashiInstance): void;
