import { IAyakashiInstance } from "../prelude/prelude";
import { IDomProp } from "../prelude/query/query";
declare module "../prelude/prelude" {
    interface IAyakashiInstance {
/**
* Types text in a prop by pressing each character one by one with a delay.
* ```js
ayakashi.selectOne("searchBox").where({id: {eq: "search"}});
await ayakashi.typeIn("searchBox", "web scraping and sanity");
```
*/
        typeIn: (prop: IDomProp | string, text: string) => Promise<void>;
/**
* Clears the text in a prop by pressing Backspace until the value is cleared.
* A character count can be specified to only clear part of the text.
* ```js
ayakashi.selectOne("myInput").where({id: {eq: "name"}});
await ayakashi.clearInput("myInput");
```
*/
        clearInput: (prop: IDomProp | string, charCount?: number) => Promise<void>;
    }
}
export default function (ayakashiInstance: IAyakashiInstance): void;
