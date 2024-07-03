import { Customer } from "../customer/Customer";
import { SupportAgent } from "../supportAgent/SupportAgent";

export type SupportTicket = {
  assignedAgent: string | null;
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  id: string;
  status: string | null;
  supportAgent?: SupportAgent | null;
  title: string | null;
  updatedAt: Date;
};
