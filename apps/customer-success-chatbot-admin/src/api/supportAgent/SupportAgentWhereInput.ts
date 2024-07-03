import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SupportTicketListRelationFilter } from "../supportTicket/SupportTicketListRelationFilter";

export type SupportAgentWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  supportTickets?: SupportTicketListRelationFilter;
};
