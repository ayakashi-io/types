import { IAyakashiInstance } from "../prelude/prelude";
import { IDomProp } from "../prelude/query/query";
declare module "../prelude/prelude" {
    interface IAyakashiInstance {
/**
* Clicks on a prop
* ```js
ayakashi.selectOne("myButtonProp").where({class: {eq: "btn"}});
await ayakashi.click("myButtonProp");
```
*/
        click: (prop: IDomProp | string) => Promise<void>;
/**
* Double-clicks on a prop
* ```js
ayakashi.selectOne("myButtonProp").where({class: {eq: "btn"}});
await ayakashi.doubleClick("myButtonProp");
```
*/
        doubleClick: (prop: IDomProp | string) => Promise<void>;
/**
* Right-clicks on a prop
* ```js
ayakashi.selectOne("menuOpener").where({class: {eq: "menu-trigger"}});
await ayakashi.rightClick("menuOpener");
```
*/
        rightClick: (prop: IDomProp | string) => Promise<void>;
/**
* Taps on a prop. Same as click() but dispatches touch events instead of mouse events.
* ```js
ayakashi.selectOne("myButtonProp").where({class: {eq: "btn"}});
await ayakashi.tap("myButtonProp");
```
*/
        tap: (prop: IDomProp | string) => Promise<void>;
    }
}
export default function (ayakashiInstance: IAyakashiInstance): void;
