/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ChatbotResponse as PrismaChatbotResponse,
} from "@prisma/client";

export class ChatbotResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ChatbotResponseCountArgs, "select">
  ): Promise<number> {
    return this.prisma.chatbotResponse.count(args);
  }

  async chatbotResponses(
    args: Prisma.ChatbotResponseFindManyArgs
  ): Promise<PrismaChatbotResponse[]> {
    return this.prisma.chatbotResponse.findMany(args);
  }
  async chatbotResponse(
    args: Prisma.ChatbotResponseFindUniqueArgs
  ): Promise<PrismaChatbotResponse | null> {
    return this.prisma.chatbotResponse.findUnique(args);
  }
  async createChatbotResponse(
    args: Prisma.ChatbotResponseCreateArgs
  ): Promise<PrismaChatbotResponse> {
    return this.prisma.chatbotResponse.create(args);
  }
  async updateChatbotResponse(
    args: Prisma.ChatbotResponseUpdateArgs
  ): Promise<PrismaChatbotResponse> {
    return this.prisma.chatbotResponse.update(args);
  }
  async deleteChatbotResponse(
    args: Prisma.ChatbotResponseDeleteArgs
  ): Promise<PrismaChatbotResponse> {
    return this.prisma.chatbotResponse.delete(args);
  }
}
