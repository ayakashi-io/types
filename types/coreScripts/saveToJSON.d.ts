export default function (input: {
    [key: string]: unknown;
} | {
    [key: string]: unknown;
}[], params: {
    file?: string;
}, system: {
    projectFolder: string;
    operationId: string;
    startDate: string;
}): Promise<{
    [key: string]: unknown;
} | {
    [key: string]: unknown;
}[] | undefined>;
