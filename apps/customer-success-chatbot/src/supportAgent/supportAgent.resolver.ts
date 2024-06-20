import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SupportAgentResolverBase } from "./base/supportAgent.resolver.base";
import { SupportAgent } from "./base/SupportAgent";
import { SupportAgentService } from "./supportAgent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SupportAgent)
export class SupportAgentResolver extends SupportAgentResolverBase {
  constructor(
    protected readonly service: SupportAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
