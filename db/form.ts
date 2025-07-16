import { supabase } from "@/lib/supabase";
import { ClientLead, LeadResponse } from "@/types";

export async function createLead(
  client_lead: ClientLead
): Promise<LeadResponse> {
  const email = process.env.FREELANCER_EMAIL;

  const lead = await supabase
    .from("client_leads")
    .insert([client_lead])
    .select();

  if (lead.error) {
    return {
      data: [],
      message: "contact creation failed directly mail at me at ",
      status: "error",
    };
  }
  return {
    data: [lead.data],
    message: `Contact creation failed. Please email me directly at ${email}.`,
    status: "success",
  };
}
