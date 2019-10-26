import { Express } from "express";
import { UserAgentDataStatic } from "../sessionDb/sessionDb";
import { Sequelize } from "sequelize";
export declare function addUserAgentRoutes(app: Express, sessionDb: Sequelize, userAgentModel: UserAgentDataStatic): void;
