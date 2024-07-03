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
  SupportAgent as PrismaSupportAgent,
  SupportTicket as PrismaSupportTicket,
} from "@prisma/client";

export class SupportAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SupportAgentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.supportAgent.count(args);
  }

  async supportAgents(
    args: Prisma.SupportAgentFindManyArgs
  ): Promise<PrismaSupportAgent[]> {
    return this.prisma.supportAgent.findMany(args);
  }
  async supportAgent(
    args: Prisma.SupportAgentFindUniqueArgs
  ): Promise<PrismaSupportAgent | null> {
    return this.prisma.supportAgent.findUnique(args);
  }
  async createSupportAgent(
    args: Prisma.SupportAgentCreateArgs
  ): Promise<PrismaSupportAgent> {
    return this.prisma.supportAgent.create(args);
  }
  async updateSupportAgent(
    args: Prisma.SupportAgentUpdateArgs
  ): Promise<PrismaSupportAgent> {
    return this.prisma.supportAgent.update(args);
  }
  async deleteSupportAgent(
    args: Prisma.SupportAgentDeleteArgs
  ): Promise<PrismaSupportAgent> {
    return this.prisma.supportAgent.delete(args);
  }

  async findSupportTickets(
    parentId: string,
    args: Prisma.SupportTicketFindManyArgs
  ): Promise<PrismaSupportTicket[]> {
    return this.prisma.supportAgent
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .supportTickets(args);
  }
}
