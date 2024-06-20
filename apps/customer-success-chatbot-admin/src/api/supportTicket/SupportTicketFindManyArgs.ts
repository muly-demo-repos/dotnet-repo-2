import { SupportTicketWhereInput } from "./SupportTicketWhereInput";
import { SupportTicketOrderByInput } from "./SupportTicketOrderByInput";

export type SupportTicketFindManyArgs = {
  where?: SupportTicketWhereInput;
  orderBy?: Array<SupportTicketOrderByInput>;
  skip?: number;
  take?: number;
};
