import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { email } = await req.json()

  const transporter = nodemailer.createTransport({
    // Your email service configuration
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'info@scalify.ca',
      subject: 'New Newsletter Subscription',
      text: `New subscription request from: ${email}`,
      html: `
        <h3>New Newsletter Subscription</h3>
        <p><strong>Email:</strong> ${email}</p>
      `,
    })

    return NextResponse.json({ message: 'Subscription successful' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Error processing subscription' }, { status: 500 })
  }
} 