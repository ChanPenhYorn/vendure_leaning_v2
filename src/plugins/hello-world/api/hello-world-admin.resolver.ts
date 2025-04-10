import { Args, Query, Resolver } from "@nestjs/graphql";
import { Permission } from "@vendure/common/lib/generated-types";
import { ID } from "@vendure/common/lib/shared-types";
import { Allow, Ctx, RequestContext } from "@vendure/core";
import { HelloWorldService } from "../services/hello-world.service";

@Resolver()
export class HelloWorldAdminResolver {
  constructor(private helloWorldService: HelloWorldService) {}

  @Query()
  @Allow(Permission.SuperAdmin)
  async getHelloApi(@Ctx() ctx: RequestContext): Promise<string> {
    return this.helloWorldService.exampleMethod(ctx);
  }
}
