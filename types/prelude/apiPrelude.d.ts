import { IRetryActions } from "./actions/retry";
import { IRequestActions } from "./actions/request";
import { IYieldActions } from "./actions/yield";
export interface IApiAyakashiInstance extends IRequestActions, IYieldActions, IRetryActions {
}
export declare function apiPrelude(): IApiAyakashiInstance;
