import { IAyakashiInstance } from "../prelude/prelude";
import { IDomProp } from "../prelude/query/query";
declare module "../prelude/prelude" {
    interface IAyakashiInstance {
    /**
     * Returns the x and y coordinates of a prop.
* ```js
    ayakashi.selectOne("myButton").where({class: {eq: "btn"}});
    await ayakashi.getPosition("myButton");
```
    */
        getPosition: (prop: IDomProp | string) => Promise<{
            x: number;
            y: number;
        }>;
    /**
     * Returns the DOM nodeId of a prop. Mostly for internal use or to implement other actions.
* ```js
    ayakashi.selectOne("myButton").where({class: {eq: "btn"}});
    await ayakashi.getNodeId("myButton");
```
    */
        getNodeId: (prop: IDomProp | string) => Promise<number>;
    }
}
export default function (ayakashiInstance: IAyakashiInstance): void;
