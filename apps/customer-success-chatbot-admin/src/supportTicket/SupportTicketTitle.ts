import { SupportTicket as TSupportTicket } from "../api/supportTicket/SupportTicket";

export const SUPPORTTICKET_TITLE_FIELD = "title";

export const SupportTicketTitle = (record: TSupportTicket): string => {
  return record.title?.toString() || String(record.id);
};
