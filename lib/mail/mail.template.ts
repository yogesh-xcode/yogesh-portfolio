export const emailBody = (
  client_name: string
): string => `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 24px; background-color: #f9fafb; color: #111827; line-height: 1.6;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <h2 style="margin-bottom: 16px; font-size: 24px; color: #111827;">Hey ${client_name},</h2>
    
        <p style="margin-bottom: 20px;">Thanks for reaching out and sharing your project details — I’ve received your message and genuinely appreciate the clarity. I work with only a few clients at a time to give each project the focus it deserves, and from what you've described, this one definitely stands out as promising.</p>
    
        <p style="margin-bottom: 20px;">I'll take some time to review everything you’ve shared — from your goals to any technical context — and will get back to you within 24 hours with my thoughts on the next steps, possible approach, and timeline. If you have any extra materials, updates, or questions in the meantime, feel free to hit reply.</p>
    
        <p style="margin-top: 32px; font-size: 16px;">
          Talk soon,<br />
          <strong>Yogesh</strong>
        </p>

        </p>
      </div>
    
      <div style="text-align: center; margin-top: 32px; font-size: 12px; color: #6b7280;">In the meantime, if anything comes to mind — feel free to reply. I'm all ears.</div>
    </div>`;

export const subject = "Appreciate you sharing your idea — let’s talk soon";
export const sender = process.env.FREELANCER_EMAIL!;
