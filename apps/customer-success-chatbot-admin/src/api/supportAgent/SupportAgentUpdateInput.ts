import { SupportTicketUpdateManyWithoutSupportAgentsInput } from "./SupportTicketUpdateManyWithoutSupportAgentsInput";

export type SupportAgentUpdateInput = {
  email?: string | null;
  name?: string | null;
  supportTickets?: SupportTicketUpdateManyWithoutSupportAgentsInput;
};
