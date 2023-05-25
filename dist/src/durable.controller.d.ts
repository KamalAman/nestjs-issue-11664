import { DurableService } from './durable.service';
export declare class DurableController {
    private readonly durableService;
    constructor(durableService: DurableService);
    greeting(): string;
    echo(): unknown;
}
