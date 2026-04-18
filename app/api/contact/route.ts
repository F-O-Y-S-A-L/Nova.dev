import { NextResponse } from 'next/server';
import Contact from '@/models/contact';
import { dbConnect } from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    await dbConnect()
    
    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      { message: 'Message sent successfully!', data: newContact },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending the message.' },
      { status: 500 }
    );
  }
}
