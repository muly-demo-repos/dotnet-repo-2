import { SupportTicket } from "../supportTicket/SupportTicket";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  internalCustomerId: number | null;
  name: string | null;
  phoneNumber: string | null;
  supportTickets?: Array<SupportTicket>;
  updatedAt: Date;
};
