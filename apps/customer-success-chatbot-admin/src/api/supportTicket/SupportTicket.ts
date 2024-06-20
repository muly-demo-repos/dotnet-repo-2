import { Customer } from "../customer/Customer";

export type SupportTicket = {
  assignedAgent: string | null;
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  id: string;
  status: string | null;
  title: string | null;
  updatedAt: Date;
};
