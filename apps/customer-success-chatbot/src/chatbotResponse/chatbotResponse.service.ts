import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatbotResponseServiceBase } from "./base/chatbotResponse.service.base";

@Injectable()
export class ChatbotResponseService extends ChatbotResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
