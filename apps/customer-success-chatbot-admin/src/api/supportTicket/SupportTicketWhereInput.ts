import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SupportAgentWhereUniqueInput } from "../supportAgent/SupportAgentWhereUniqueInput";

export type SupportTicketWhereInput = {
  assignedAgent?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  supportAgent?: SupportAgentWhereUniqueInput;
  title?: StringNullableFilter;
};
