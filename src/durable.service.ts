import { Inject, Injectable, Scope, BadRequestException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

let firstRequest = true;
@Injectable({ scope: Scope.REQUEST, durable: true })
export class DurableService {
  public instanceCounter = 0;

  constructor(@Inject(REQUEST) public readonly requestPayload: unknown) {
    if (firstRequest) {
      firstRequest = false;
      throw new BadRequestException();
    }
  }

  greeting() {
    ++this.instanceCounter;
    return `Hello world! Counter: ${this.instanceCounter}`;
  }
}
