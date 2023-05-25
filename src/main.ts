import { NestFactory, ContextIdFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AggregateByTenantContextIdStrategy } from './durable-context-id.strategy';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);


  ContextIdFactory.apply(new AggregateByTenantContextIdStrategy());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
