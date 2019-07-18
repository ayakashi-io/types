import { IAyakashiInstance } from "../prelude";
import { IRenderlessAyakashiInstance } from "../renderlessPrelude";
import { IApiAyakashiInstance } from "../apiPrelude";
import { IPipeProcClient } from "pipeproc";
export declare function attachYields(ayakashiInstance: IAyakashiInstance | IRenderlessAyakashiInstance | IApiAyakashiInstance, pipeprocClient: IPipeProcClient, saveTopic: string, selfTopic: string, yieldWatcher: {
    yieldedAtLeastOnce: boolean;
}): void;
