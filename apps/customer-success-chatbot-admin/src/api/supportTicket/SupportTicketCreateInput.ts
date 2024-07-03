import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { SupportAgentWhereUniqueInput } from "../supportAgent/SupportAgentWhereUniqueInput";

export type SupportTicketCreateInput = {
  assignedAgent?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  status?: string | null;
  supportAgent?: SupportAgentWhereUniqueInput | null;
  title?: string | null;
};
