export default function (input: {
    [key: string]: {
        [key: string]: unknown;
    }[] | {
        [key: string]: unknown;
    }[];
}, _params: {}, _system: {
    projectFolder: string;
    operationId: string;
    startDate: string;
}): Promise<{
    [key: string]: {
        [key: string]: unknown;
    }[] | {
        [key: string]: unknown;
    }[];
} | undefined>;
