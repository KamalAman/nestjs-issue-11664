export declare class DurableService {
    readonly requestPayload: unknown;
    instanceCounter: number;
    constructor(requestPayload: unknown);
    greeting(): string;
}
