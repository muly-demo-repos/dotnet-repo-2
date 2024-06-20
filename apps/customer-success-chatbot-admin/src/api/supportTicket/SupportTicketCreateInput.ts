import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type SupportTicketCreateInput = {
  assignedAgent?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  status?: string | null;
  title?: string | null;
};
