import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, phone, service, budget, message } = body

    if (!name || !email || !service || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: 'Invalid email address.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const recipients = process.env.CONTACT_TO || 'tshamimbd@gmail.com,shamim@devskamp.com'

    const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Project Inquiry — Devskamp</title>
</head>
<body style="margin:0;padding:0;background:#020B18;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#020B18;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#061220;border:1px solid #0E2040;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0EA5E9,#0284C7);padding:32px 40px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">
                New Project Inquiry
              </h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">
                Received via devskamp.com contact form
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">

              <!-- Fields table -->
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  ['Name', name],
                  ['Email', email],
                  ...(company ? [['Company', company]] : []),
                  ...(phone ? [['Phone', phone]] : []),
                  ['Service', service],
                  ...(budget ? [['Budget', budget]] : []),
                ]
                  .map(
                    ([label, value]) => `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #0E2040;width:130px;vertical-align:top;">
                    <span style="color:#6B92B0;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">${label}</span>
                  </td>
                  <td style="padding:10px 0 10px 16px;border-bottom:1px solid #0E2040;vertical-align:top;">
                    <span style="color:#E8F4FD;font-size:14px;font-weight:500;">${value}</span>
                  </td>
                </tr>`
                  )
                  .join('')}
              </table>

              <!-- Message -->
              <div style="margin-top:24px;">
                <p style="margin:0 0 8px;color:#6B92B0;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Message</p>
                <div style="background:#0A1828;border:1px solid #0E2040;border-radius:8px;padding:16px;color:#E8F4FD;font-size:14px;line-height:1.7;">
                  ${message.replace(/\n/g, '<br />')}
                </div>
              </div>

              <!-- Reply hint -->
              <div style="margin-top:24px;background:rgba(14,165,233,0.05);border:1px solid rgba(14,165,233,0.15);border-radius:8px;padding:14px 16px;">
                <p style="margin:0;color:#6B92B0;font-size:12px;">
                  💬 Hit <strong style="color:#0EA5E9;">Reply</strong> to respond directly to <strong style="color:#E8F4FD;">${name}</strong> at ${email}
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #0E2040;padding:20px 40px;background:#020B18;">
              <p style="margin:0;color:#2A3A50;font-size:11px;">
                Devskamp LLC · Utah, USA &amp; Dhaka, Bangladesh · devskamp.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

    await transporter.sendMail({
      from: `"Devskamp Website" <${process.env.SMTP_USER}>`,
      to: recipients,
      replyTo: `"${name}" <${email}>`,
      subject: `[Devskamp] New ${service} Inquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: htmlBody,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Devskamp LLC" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your inquiry — Devskamp LLC`,
      html: `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#f8fafc;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;max-width:560px;width:100%;">
          <tr>
            <td style="background:linear-gradient(135deg,#0EA5E9,#0284C7);padding:28px 36px;">
              <h2 style="margin:0;color:#fff;font-size:20px;font-weight:700;">We got your message!</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 36px;">
              <p style="margin:0 0 16px;color:#1e293b;font-size:15px;">Hi ${name},</p>
              <p style="margin:0 0 16px;color:#475569;font-size:14px;line-height:1.7;">
                Thank you for reaching out to Devskamp. We've received your inquiry about
                <strong style="color:#0EA5E9;">${service}</strong> and our team will review it
                shortly.
              </p>
              <p style="margin:0 0 16px;color:#475569;font-size:14px;line-height:1.7;">
                You can expect to hear from us within <strong>24 hours</strong> with a clear
                next step — usually a short discovery call to better understand your project goals.
              </p>
              <p style="margin:0;color:#475569;font-size:14px;">
                Warmly,<br />
                <strong style="color:#1e293b;">The Devskamp Team</strong><br />
                <span style="color:#94a3b8;font-size:12px;">Utah, USA &amp; Dhaka, Bangladesh</span>
              </p>
            </td>
          </tr>
          <tr>
            <td style="border-top:1px solid #e2e8f0;padding:16px 36px;background:#f8fafc;">
              <p style="margin:0;color:#94a3b8;font-size:11px;">Devskamp LLC · devskamp.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    })

    return NextResponse.json({ success: true, message: 'Message sent successfully.' })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}
