import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChatbotResponseService } from "./chatbotResponse.service";
import { ChatbotResponseControllerBase } from "./base/chatbotResponse.controller.base";

@swagger.ApiTags("chatbotResponses")
@common.Controller("chatbotResponses")
export class ChatbotResponseController extends ChatbotResponseControllerBase {
  constructor(
    protected readonly service: ChatbotResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
