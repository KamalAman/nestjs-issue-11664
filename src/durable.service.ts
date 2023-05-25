import { Inject, Injectable, Scope, BadRequestException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST, durable: true })
export class DurableService {
  public instanceCounter = 0;

  constructor(@Inject(REQUEST) public readonly requestPayload: unknown) {}

  greeting() {
    ++this.instanceCounter;
    if (this.instanceCounter === 1) {
      throw new BadRequestException();
    }
    return `Hello world! Counter: ${this.instanceCounter}`;
  }
}
