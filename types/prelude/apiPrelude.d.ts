import { IRetryActions } from "./actions/retry";
import { IRequestActions } from "./actions/request";
import { IYieldActions } from "./actions/yield";
import { ICookieActions } from "./actions/cookies";
export interface IApiAyakashiInstance extends IRequestActions, IYieldActions, IRetryActions, ICookieActions {
}
export declare function apiPrelude(): IApiAyakashiInstance;
