export declare function getOpLog(): {
    info: (...logs: string[]) => void;
    warn: (...logs: string[]) => void;
    error: (...logs: string[]) => void;
    debug: (...logs: string[]) => void;
    waiter: (text: string) => import("ora").Ora;
};
