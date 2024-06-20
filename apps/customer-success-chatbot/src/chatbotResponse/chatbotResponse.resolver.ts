import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChatbotResponseResolverBase } from "./base/chatbotResponse.resolver.base";
import { ChatbotResponse } from "./base/ChatbotResponse";
import { ChatbotResponseService } from "./chatbotResponse.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChatbotResponse)
export class ChatbotResponseResolver extends ChatbotResponseResolverBase {
  constructor(
    protected readonly service: ChatbotResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
