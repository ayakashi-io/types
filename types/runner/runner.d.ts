import { Config } from "./parseConfig";
export declare function run(projectFolder: string, config: Config, options: {
    resume: boolean;
    restartDisabledSteps: boolean;
    clean: boolean;
    simpleScraper: string | null;
}): Promise<void>;
