import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SupportAgentModuleBase } from "./base/supportAgent.module.base";
import { SupportAgentService } from "./supportAgent.service";
import { SupportAgentController } from "./supportAgent.controller";
import { SupportAgentResolver } from "./supportAgent.resolver";

@Module({
  imports: [SupportAgentModuleBase, forwardRef(() => AuthModule)],
  controllers: [SupportAgentController],
  providers: [SupportAgentService, SupportAgentResolver],
  exports: [SupportAgentService],
})
export class SupportAgentModule {}
