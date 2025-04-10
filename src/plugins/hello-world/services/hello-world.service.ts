import { Injectable } from "@nestjs/common";
import { ID, RequestContext, TransactionalConnection } from "@vendure/core";

@Injectable()
export class HelloWorldService {
  constructor(private connection: TransactionalConnection) {}

  async exampleMethod(ctx: RequestContext) {
    return Array(100).fill("Hello").join(" ");
  }

  async getHelloApi(ctx: RequestContext, id: ID): Promise<boolean> {
    return true;
  }
}
