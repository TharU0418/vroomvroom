// pages/api/driver-application.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = async (req: NextApiRequest) =>
  new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
    const form = formidable({ multiples: false, keepExtensions: true });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method not allowed');

  try {
    const { fields, files } = await parseForm(req);

    const { name, email, phone, message, categories } = fields;
    const uploadedFile = files.file as formidable.File;

    // ✅ Use Ethereal test account
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const mailOptions = {
      from: `"Driver App" <no-reply@example.com>`,
      to: 'allinonetutorial2001@gmail.com', // Replace this with your real email if needed
      subject: `New Driver Application from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Categories: ${Array.isArray(categories) ? categories.join(', ') : categories}
Message: ${message}
      `,
      attachments: uploadedFile
        ? [
            {
              filename: uploadedFile.originalFilename || 'cv.pdf',
              path: uploadedFile.filepath,
            },
          ]
        : [],
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

    res.status(200).json({
      message: 'Application sent successfully',
      previewUrl: nodemailer.getTestMessageUrl(info),
    });
  } catch (err) {
    console.error('Email sending failed:', err);
    res.status(500).json({ error: 'Failed to send application' });
  }
}
