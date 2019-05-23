import { IAyakashiInstance } from "../prelude/prelude";
import { IDomProp } from "../prelude/query/query";
declare module "../prelude/prelude" {
    interface IAyakashiInstance {
    /**
     * Checks a checkbox prop if it is not already checked.
* ```js
    ayakashi.selectOne("myCheckboxProp").where({id: {eq: "myCheckbox"}});
    await ayakashi.check("myCheckboxProp");
```
    */
        check: (prop: IDomProp | string) => Promise<void>;
    /**
     * Unchecks a checkbox prop if it is already checked.
* ```js
    ayakashi.selectOne("myCheckboxProp").where({id: {eq: "myCheckbox"}});
    await ayakashi.uncheck("myCheckboxProp");
```
    */
        uncheck: (prop: IDomProp | string) => Promise<void>;
    }
}
export default function (ayakashiInstance: IAyakashiInstance): void;
