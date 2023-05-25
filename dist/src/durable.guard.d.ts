import { CanActivate, ExecutionContext } from '@nestjs/common';
import { DurableService } from './durable.service';
export declare class DurableGuard implements CanActivate {
    private readonly durableService;
    instanceCounter: number;
    constructor(durableService: DurableService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
