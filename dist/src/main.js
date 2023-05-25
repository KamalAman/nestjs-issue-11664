"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const durable_context_id_strategy_1 = require("./durable-context-id.strategy");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    core_1.ContextIdFactory.apply(new durable_context_id_strategy_1.AggregateByTenantContextIdStrategy());
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map