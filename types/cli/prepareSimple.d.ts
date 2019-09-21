import { Config } from "../runner/parseConfig";
export declare function prepareSimple(file: string, out: string, scraperType: "scraper" | "renderlessScraper" | "apiScraper"): {
    config: Config;
    directory: string;
    scraper: string;
};
