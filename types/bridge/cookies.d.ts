import { Express } from "express";
import { CookieStatic } from "../sessionDb/sessionDb";
import { Sequelize } from "sequelize";
export declare function addCookiesRoutes(app: Express, sessionDb: Sequelize, CookieModel: CookieStatic): void;
