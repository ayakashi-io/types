export default function (input: {
    [key: string]: {
        [key: string]: unknown;
    }[] | {
        [key: string]: unknown;
    }[];
}, params: {
    dialect?: "mysql" | "mariadb" | "postgres" | "mssql" | "sqlite";
    host?: string;
    port?: number;
    database?: string;
    username?: string;
    password?: string;
    connectionURI?: string;
    table?: string;
}, system: {
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
