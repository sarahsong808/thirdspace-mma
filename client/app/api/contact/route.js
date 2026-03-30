import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

/**
 * POST /api/contact
 * Accepts lead form submissions and sends an email notification.
 *
 * @param {Request} request
 * @returns {Promise<NextResponse>}
 */
export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, phone, interest, message } = body

  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim().length < 1) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
  }

  // Sanitize inputs (strip HTML to prevent XSS in email clients)
  const safe = (/** @type {string|undefined} */ v) =>
    typeof v === 'string' ? v.replace(/</g, '&lt;').replace(/>/g, '&gt;').slice(0, 1000) : ''

  const safeName = safe(name)
  const safeEmail = safe(email)
  const safePhone = safe(phone)
  const safeInterest = safe(interest)
  const safeMessage = safe(message)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const htmlBody = `
    <div style="font-family: sans-serif; max-width: 600px;">
      <h2 style="color: #C8102E;">New Lead — Third Space MMA</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:600; width:120px;">Name</td><td style="padding:8px; border-bottom:1px solid #eee;">${safeName}</td></tr>
        <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:600;">Email</td><td style="padding:8px; border-bottom:1px solid #eee;">${safeEmail}</td></tr>
        <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:600;">Phone</td><td style="padding:8px; border-bottom:1px solid #eee;">${safePhone || '—'}</td></tr>
        <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:600;">Interest</td><td style="padding:8px; border-bottom:1px solid #eee;">${safeInterest || '—'}</td></tr>
        <tr><td style="padding:8px; font-weight:600; vertical-align:top;">Message</td><td style="padding:8px;">${safeMessage || '—'}</td></tr>
      </table>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Third Space MMA Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@thirdspacemma.com',
      replyTo: safeEmail,
      subject: `New inquiry from ${safeName} — Third Space MMA`,
      html: htmlBody,
    })
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
