"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateByTenantContextIdStrategy = void 0;
const core_1 = require("@nestjs/core");
const tenants = new Map();
class AggregateByTenantContextIdStrategy {
    attach(contextId, request) {
        const tenantId = request.headers['x-tenant-id'];
        let tenantSubTreeId;
        if (tenants.has(tenantId)) {
            tenantSubTreeId = tenants.get(tenantId);
        }
        else {
            tenantSubTreeId = core_1.ContextIdFactory.create();
            tenants.set(tenantId, tenantSubTreeId);
        }
        console.log(tenants);
        return (info) => info.isTreeDurable ? tenantSubTreeId : contextId;
    }
}
exports.AggregateByTenantContextIdStrategy = AggregateByTenantContextIdStrategy;
//# sourceMappingURL=durable-context-id.strategy.js.map