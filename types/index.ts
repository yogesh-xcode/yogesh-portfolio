export interface ClientLead {
  id?: number;
  name: string;
  email: string;
  project_type: string;
  description: string;
  created_at?: string;
}

export interface LeadResponse {
  data: Array<object>;
  message: string;
  status: "success" | "error";
}
