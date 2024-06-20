import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SupportTicketListRelationFilter } from "../supportTicket/SupportTicketListRelationFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  internalCustomerId?: IntNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  supportTickets?: SupportTicketListRelationFilter;
};
