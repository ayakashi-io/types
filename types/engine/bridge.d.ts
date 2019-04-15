/// <reference types="node" />
import { IHeadlessChrome } from "./browser";
import { Server } from "http";
export declare function startBridge(browser: IHeadlessChrome, port: number): Promise<Server>;
