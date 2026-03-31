import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body
    
    
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }
    
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Send email to you (the admin)
    const { data, error } = await resend.emails.send({
      from: 'StartBox <onboarding@resend.dev>',
      to: ['samsylvester09@gmail.com'],
      subject: '🎉 New Waitlist Signup!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #8b5cf6;">New Waitlist Signup! 🚀</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <hr />
          <p style="color: #666;">Total signups: Check your Resend dashboard</p>
        </div>
      `,
    })
    
    if (error) {
      console.error('Resend Error:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }
    
    console.log('Email sent successfully:', data?.id)
    
    // Optional: Send confirmation to user
    await resend.emails.send({
      from: 'StartBox <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to StartBox Waitlist! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #8b5cf6;">Welcome to StartBox!</h1>
          <p>Thanks for joining the waitlist! You're now on the list for early access.</p>
          <p>We'll keep you updated on our progress and send you exclusive early-bird offers.</p>
          <br />
          <p>Stay tuned,</p>
          <p><strong>The StartBox Team</strong></p>
        </div>
      `,
    }).catch(err => console.log('User email error (optional):', err))
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined waitlist! Check your email for confirmation.',
        emailId: data?.id
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Server Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}