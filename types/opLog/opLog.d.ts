export declare function getOpLog(): {
    info: (...logs: string[]) => void;
    warn: (...logs: string[]) => void;
    error: (...logs: string[]) => void;
    debug: (...logs: string[]) => void;
    waiter: (text: string) => import("ora").Ora;
    messageBox: (logs: string[], opts?: {
        color?: string | undefined;
        margin?: number | undefined;
    } | undefined) => void;
    incrementalMessageBox: (opts?: {
        color?: string | undefined;
        margin?: number | undefined;
    } | undefined) => {
        _logs: string[];
        add: (text: string | string[]) => void;
        render: () => void;
    };
};
