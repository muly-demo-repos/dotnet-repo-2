import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SupportTicketModuleBase } from "./base/supportTicket.module.base";
import { SupportTicketService } from "./supportTicket.service";
import { SupportTicketController } from "./supportTicket.controller";
import { SupportTicketResolver } from "./supportTicket.resolver";

@Module({
  imports: [SupportTicketModuleBase, forwardRef(() => AuthModule)],
  controllers: [SupportTicketController],
  providers: [SupportTicketService, SupportTicketResolver],
  exports: [SupportTicketService],
})
export class SupportTicketModule {}
