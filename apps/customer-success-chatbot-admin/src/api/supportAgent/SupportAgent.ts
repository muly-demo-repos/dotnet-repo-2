import { SupportTicket } from "../supportTicket/SupportTicket";

export type SupportAgent = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  supportTickets?: Array<SupportTicket>;
  updatedAt: Date;
};
