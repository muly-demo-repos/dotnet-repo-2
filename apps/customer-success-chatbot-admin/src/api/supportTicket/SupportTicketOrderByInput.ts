import { SortOrder } from "../../util/SortOrder";

export type SupportTicketOrderByInput = {
  assignedAgent?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  supportAgentId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
