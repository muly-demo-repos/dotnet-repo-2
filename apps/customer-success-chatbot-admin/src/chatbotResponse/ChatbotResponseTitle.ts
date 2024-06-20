import { ChatbotResponse as TChatbotResponse } from "../api/chatbotResponse/ChatbotResponse";

export const CHATBOTRESPONSE_TITLE_FIELD = "ticket";

export const ChatbotResponseTitle = (record: TChatbotResponse): string => {
  return record.ticket?.toString() || String(record.id);
};
