import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SupportAgentServiceBase } from "./base/supportAgent.service.base";

@Injectable()
export class SupportAgentService extends SupportAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
