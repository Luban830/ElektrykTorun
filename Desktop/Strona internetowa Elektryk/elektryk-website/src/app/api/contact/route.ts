import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy adres email' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM || 'kontakt@elektrykpro.pl',
      to: [process.env.MAIL_TO || 'kontakt@elektrykpro.pl'],
      subject: `Nowa wiadomość od ${name} - Elektryk Toruń`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #F5C518;">Nowa wiadomość z formularza kontaktowego</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111827; margin-bottom: 15px;">Dane kontaktowe:</h3>
            <p><strong>Imię i nazwisko:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || 'Nie podano'}</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111827; margin-bottom: 15px;">Wiadomość:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            Wiadomość wysłana z formularza kontaktowego na stronie Elektryk Toruń
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Błąd podczas wysyłania wiadomości' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Wiadomość została wysłana pomyślnie' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd serwera' },
      { status: 500 }
    );
  }
}
