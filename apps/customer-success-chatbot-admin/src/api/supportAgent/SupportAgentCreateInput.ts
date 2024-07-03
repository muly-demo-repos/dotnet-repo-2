import { SupportTicketCreateNestedManyWithoutSupportAgentsInput } from "./SupportTicketCreateNestedManyWithoutSupportAgentsInput";

export type SupportAgentCreateInput = {
  email?: string | null;
  name?: string | null;
  supportTickets?: SupportTicketCreateNestedManyWithoutSupportAgentsInput;
};
