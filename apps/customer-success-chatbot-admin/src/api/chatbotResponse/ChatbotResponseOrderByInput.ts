import { SortOrder } from "../../util/SortOrder";

export type ChatbotResponseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  responseTime?: SortOrder;
  ticket?: SortOrder;
  updatedAt?: SortOrder;
};
