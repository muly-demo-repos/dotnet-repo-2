import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SupportAgentService } from "./supportAgent.service";
import { SupportAgentControllerBase } from "./base/supportAgent.controller.base";

@swagger.ApiTags("supportAgents")
@common.Controller("supportAgents")
export class SupportAgentController extends SupportAgentControllerBase {
  constructor(
    protected readonly service: SupportAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
