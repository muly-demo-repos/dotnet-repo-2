/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ChatbotResponseService } from "../chatbotResponse.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChatbotResponseCreateInput } from "./ChatbotResponseCreateInput";
import { ChatbotResponse } from "./ChatbotResponse";
import { ChatbotResponseFindManyArgs } from "./ChatbotResponseFindManyArgs";
import { ChatbotResponseWhereUniqueInput } from "./ChatbotResponseWhereUniqueInput";
import { ChatbotResponseUpdateInput } from "./ChatbotResponseUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChatbotResponseControllerBase {
  constructor(
    protected readonly service: ChatbotResponseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChatbotResponse })
  @nestAccessControl.UseRoles({
    resource: "ChatbotResponse",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createChatbotResponse(
    @common.Body() data: ChatbotResponseCreateInput
  ): Promise<ChatbotResponse> {
    return await this.service.createChatbotResponse({
      data: data,
      select: {
        createdAt: true,
        id: true,
        message: true,
        responseTime: true,
        ticket: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ChatbotResponse] })
  @ApiNestedQuery(ChatbotResponseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ChatbotResponse",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async chatbotResponses(
    @common.Req() request: Request
  ): Promise<ChatbotResponse[]> {
    const args = plainToClass(ChatbotResponseFindManyArgs, request.query);
    return this.service.chatbotResponses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        message: true,
        responseTime: true,
        ticket: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChatbotResponse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChatbotResponse",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async chatbotResponse(
    @common.Param() params: ChatbotResponseWhereUniqueInput
  ): Promise<ChatbotResponse | null> {
    const result = await this.service.chatbotResponse({
      where: params,
      select: {
        createdAt: true,
        id: true,
        message: true,
        responseTime: true,
        ticket: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ChatbotResponse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChatbotResponse",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateChatbotResponse(
    @common.Param() params: ChatbotResponseWhereUniqueInput,
    @common.Body() data: ChatbotResponseUpdateInput
  ): Promise<ChatbotResponse | null> {
    try {
      return await this.service.updateChatbotResponse({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          message: true,
          responseTime: true,
          ticket: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ChatbotResponse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChatbotResponse",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteChatbotResponse(
    @common.Param() params: ChatbotResponseWhereUniqueInput
  ): Promise<ChatbotResponse | null> {
    try {
      return await this.service.deleteChatbotResponse({
        where: params,
        select: {
          createdAt: true,
          id: true,
          message: true,
          responseTime: true,
          ticket: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}