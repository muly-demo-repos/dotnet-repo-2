export type ChatbotResponse = {
  createdAt: Date;
  id: string;
  message: string | null;
  responseTime: Date | null;
  ticket: string | null;
  updatedAt: Date;
};
