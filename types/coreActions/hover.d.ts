import { IAyakashiInstance } from "../prelude/prelude";
import { IDomProp } from "../prelude/query/query";
declare module "../prelude/prelude" {
    interface IAyakashiInstance {
    /**
     * Hovers over a prop.
* ```js
    ayakashi.selectOne("moreInfo").where({id: {eq: "info"}});
    await ayakashi.hover("moreInfo");
```
    */
        hover: (prop: IDomProp | string) => Promise<void>;
    }
}
export default function (ayakashiInstance: IAyakashiInstance): void;
