import { IRetryActions } from "./actions/retry";
import { IRequestActions } from "./actions/request";
import { IYieldActions } from "./actions/yield";
import { ICookieActions } from "./actions/cookies";
import { IJoinActions } from "./actions/join";
export interface IApiAyakashiInstance extends IRequestActions, IYieldActions, IRetryActions, ICookieActions, IJoinActions {
}
export declare function apiPrelude(): IApiAyakashiInstance;
