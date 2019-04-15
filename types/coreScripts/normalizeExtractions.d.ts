declare type Extraction = {
    [key: string]: {
        [key: string]: unknown;
    }[];
};
declare type NormalizedExtraction = {
    [key: string]: unknown;
}[];
export default function (input: Extraction): NormalizedExtraction;
export {};
