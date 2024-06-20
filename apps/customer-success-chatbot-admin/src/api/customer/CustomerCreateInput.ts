import { SupportTicketCreateNestedManyWithoutCustomersInput } from "./SupportTicketCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  internalCustomerId?: number | null;
  name?: string | null;
  phoneNumber?: string | null;
  supportTickets?: SupportTicketCreateNestedManyWithoutCustomersInput;
};
