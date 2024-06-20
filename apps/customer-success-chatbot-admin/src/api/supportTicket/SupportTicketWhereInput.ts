import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SupportTicketWhereInput = {
  assignedAgent?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  title?: StringNullableFilter;
};
