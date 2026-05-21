import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, countryCode, mobileNumber, service, vision } = body;

    // Create a transporter using SMTP settings
    // These should be defined in .env.local
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // This should be an App Password
      },
    });

    const mailOptions = {
        from: `"PixoPainting Inquiry" <${process.env.EMAIL_USER}>`,
        to: 'Rajandeep23319@gmail.com, info@pixopainting.com, infopixopaint@gmail.com',
        subject: `New Project Inquiry: ${service} - ${firstName} ${lastName}`,
        text: `
          New Inquiry from PixoPainting Website:
          
          Name: ${firstName} ${lastName}
          Email: ${email}
          Mobile: ${countryCode} ${mobileNumber}
          Service Interested: ${service}
          
          Project Vision:
          ${vision}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #000;">New Project Inquiry</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${countryCode} ${mobileNumber}</p>
            <p><strong>Service:</strong> ${service}</p>
            <hr />
            <h3>Project Vision:</h3>
            <p style="white-space: pre-wrap;">${vision}</p>
          </div>
        `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email', error: String(error) }, { status: 500 });
  }
}
