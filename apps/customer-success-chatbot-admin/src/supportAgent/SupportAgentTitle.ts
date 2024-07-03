import { SupportAgent as TSupportAgent } from "../api/supportAgent/SupportAgent";

export const SUPPORTAGENT_TITLE_FIELD = "name";

export const SupportAgentTitle = (record: TSupportAgent): string => {
  return record.name?.toString() || String(record.id);
};
