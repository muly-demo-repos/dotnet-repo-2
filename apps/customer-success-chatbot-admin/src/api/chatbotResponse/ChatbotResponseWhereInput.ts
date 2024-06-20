import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ChatbotResponseWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  responseTime?: DateTimeNullableFilter;
  ticket?: StringNullableFilter;
};
