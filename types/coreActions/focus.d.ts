import { IAyakashiInstance } from "../prelude/prelude";
import { IDomProp } from "../prelude/query/query";
declare module "../prelude/prelude" {
    interface IAyakashiInstance {
        /**
         * Focuses on a prop
         * ```js
        ayakashi.selectOne("myInput").where({id: {eq: "email"}});
        await ayakashi.focus("myInput");
        ```
        */
        focus: (prop: IDomProp | string) => Promise<void>;
    }
}
export default function (ayakashiInstance: IAyakashiInstance): void;
