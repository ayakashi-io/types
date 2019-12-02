export declare function retryOnErrorOrTimeOut<T>(task: () => Promise<T>, retries?: number): Promise<T>;
