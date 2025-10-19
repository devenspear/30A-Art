import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // TODO: Integrate with MailerLite when ready
    // For now, just return success
    console.log('Email subscription (stub):', email);

    // Simulate successful subscription
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing! We\'ll keep you updated on 30A\'s creative scene.'
      },
      { status: 200 }
    );

    // When MailerLite integration is ready, uncomment and configure:
    /*
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        groups: [process.env.MAILERLITE_GROUP_ID],
      }),
    });

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: 'Thank you for subscribing!' },
        { status: 200 }
      );
    } else {
      throw new Error('MailerLite API error');
    }
    */
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
