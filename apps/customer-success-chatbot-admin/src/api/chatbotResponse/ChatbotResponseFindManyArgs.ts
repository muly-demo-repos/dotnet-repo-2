import { ChatbotResponseWhereInput } from "./ChatbotResponseWhereInput";
import { ChatbotResponseOrderByInput } from "./ChatbotResponseOrderByInput";

export type ChatbotResponseFindManyArgs = {
  where?: ChatbotResponseWhereInput;
  orderBy?: Array<ChatbotResponseOrderByInput>;
  skip?: number;
  take?: number;
};
