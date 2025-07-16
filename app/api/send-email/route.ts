import { sendMail } from "@/lib/mail"; // adjust the path as needed

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ status: "error", message: "Missing name or email" }),
        { status: 400 }
      );
    }

    const result = await sendMail(name, email);

    console.log("Email sent result:", result);

    return Response.json({ status: "success", result });
  } catch (error: any) {
    console.error("Email send failed:", error);
    return new Response(
      JSON.stringify({
        status: "error",
        message: error.message || "Failed to send email",
      }),
      { status: 500 }
    );
  }
}
