export const runtime = 'nodejs';
import nodemailer, { Transporter } from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL || 'niranjan.salihundam@gmail.com';

    let transporter: Transporter;
    if (!smtpHost || !smtpUser || !smtpPass) {
      if (process.env.NODE_ENV !== 'production') {
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: { user: testAccount.user, pass: testAccount.pass }
        });
      } else {
        return NextResponse.json({ ok: false, error: 'Email not configured (missing SMTP env vars)' }, { status: 500 });
      }
    } else {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass }
      });
    }

    try {
      await transporter.verify();
    } catch (e) {
      console.error('SMTP verify failed:', e);
      return NextResponse.json({ ok: false, error: 'Email transport verify failed' }, { status: 500 });
    }

    const subject = `New contact form submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const info = await transporter.sendMail({
      from: `Hospital Website <${smtpUser || 'no-reply@example.com'}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text
    });

    const previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
    return NextResponse.json({ ok: true, previewUrl });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 500 });
  }
}


