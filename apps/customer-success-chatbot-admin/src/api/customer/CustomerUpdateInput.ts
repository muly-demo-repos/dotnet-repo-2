import { SupportTicketUpdateManyWithoutCustomersInput } from "./SupportTicketUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  internalCustomerId?: number | null;
  name?: string | null;
  phoneNumber?: string | null;
  supportTickets?: SupportTicketUpdateManyWithoutCustomersInput;
};
