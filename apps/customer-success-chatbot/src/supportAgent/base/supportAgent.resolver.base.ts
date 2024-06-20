/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { SupportAgent } from "./SupportAgent";
import { SupportAgentCountArgs } from "./SupportAgentCountArgs";
import { SupportAgentFindManyArgs } from "./SupportAgentFindManyArgs";
import { SupportAgentFindUniqueArgs } from "./SupportAgentFindUniqueArgs";
import { CreateSupportAgentArgs } from "./CreateSupportAgentArgs";
import { UpdateSupportAgentArgs } from "./UpdateSupportAgentArgs";
import { DeleteSupportAgentArgs } from "./DeleteSupportAgentArgs";
import { SupportAgentService } from "../supportAgent.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SupportAgent)
export class SupportAgentResolverBase {
  constructor(
    protected readonly service: SupportAgentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SupportAgent",
    action: "read",
    possession: "any",
  })
  async _supportAgentsMeta(
    @graphql.Args() args: SupportAgentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SupportAgent])
  @nestAccessControl.UseRoles({
    resource: "SupportAgent",
    action: "read",
    possession: "any",
  })
  async supportAgents(
    @graphql.Args() args: SupportAgentFindManyArgs
  ): Promise<SupportAgent[]> {
    return this.service.supportAgents(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SupportAgent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SupportAgent",
    action: "read",
    possession: "own",
  })
  async supportAgent(
    @graphql.Args() args: SupportAgentFindUniqueArgs
  ): Promise<SupportAgent | null> {
    const result = await this.service.supportAgent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SupportAgent)
  @nestAccessControl.UseRoles({
    resource: "SupportAgent",
    action: "create",
    possession: "any",
  })
  async createSupportAgent(
    @graphql.Args() args: CreateSupportAgentArgs
  ): Promise<SupportAgent> {
    return await this.service.createSupportAgent({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SupportAgent)
  @nestAccessControl.UseRoles({
    resource: "SupportAgent",
    action: "update",
    possession: "any",
  })
  async updateSupportAgent(
    @graphql.Args() args: UpdateSupportAgentArgs
  ): Promise<SupportAgent | null> {
    try {
      return await this.service.updateSupportAgent({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SupportAgent)
  @nestAccessControl.UseRoles({
    resource: "SupportAgent",
    action: "delete",
    possession: "any",
  })
  async deleteSupportAgent(
    @graphql.Args() args: DeleteSupportAgentArgs
  ): Promise<SupportAgent | null> {
    try {
      return await this.service.deleteSupportAgent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
