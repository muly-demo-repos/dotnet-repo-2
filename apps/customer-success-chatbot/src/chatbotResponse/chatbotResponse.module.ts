import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChatbotResponseModuleBase } from "./base/chatbotResponse.module.base";
import { ChatbotResponseService } from "./chatbotResponse.service";
import { ChatbotResponseController } from "./chatbotResponse.controller";
import { ChatbotResponseResolver } from "./chatbotResponse.resolver";

@Module({
  imports: [ChatbotResponseModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChatbotResponseController],
  providers: [ChatbotResponseService, ChatbotResponseResolver],
  exports: [ChatbotResponseService],
})
export class ChatbotResponseModule {}
