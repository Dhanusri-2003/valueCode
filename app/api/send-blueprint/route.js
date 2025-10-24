// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     const { userEmail, companyName, pdfBase64 } = await request.json();

//     if (!userEmail) {
//       return NextResponse.json({ error: 'Email is required' }, { status: 400 });
//     }

//     if (!pdfBase64) {
//       return NextResponse.json({ error: 'PDF data is required' }, { status: 400 });
//     }

//     // Create email transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'skdhanusri123@gmail.com',
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     // Send email with PDF attachment
//     await transporter.sendMail({
//       from: '"ValueCode AI" <skdhanusri123@gmail.com>',
//       to: userEmail,
//       subject: '🚀 Your AI SaaS Blueprint PDF is Ready!',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//           <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
//             <h1 style="margin: 0;">🚀 Your AI SaaS Blueprint is Ready!</h1>
//             <p style="margin: 10px 0 0 0; opacity: 0.9;">Complete Application Development Plan</p>
//           </div>
          
//           <div style="padding: 30px; background: #f8f9fa;">
//             <p>Hi there,</p>
//             <p>Your custom AI SaaS application blueprint has been generated and is attached to this email as a PDF file.</p>
            
//             ${companyName ? `<p><strong>Project:</strong> ${companyName}</p>` : ''}
            
//             <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
//               <h3 style="color: #667eea; margin-top: 0;">📎 What's in your blueprint PDF:</h3>
//               <ul>
//                 <li>Complete visual layout with all design elements and emojis</li>
//                 <li>Requested features and requirements</li>
//                 <li>Technology stack recommendations</li>
//                 <li>4-week implementation timeline</li>
//                 <li>Strategic AI-powered recommendations</li>
//                 <li>Account setup requirements</li>
//                 <li>Platform integration details</li>
//               </ul>
//             </div>

//             <p><strong>Attachment:</strong> <code>ai-saas-blueprint.pdf</code></p>
            
//             <p>Simply download the attached PDF file to view your complete blueprint.</p>
            
//             <p>Ready to bring your AI vision to life? Reply to this email to get started!</p>
            
//             <p style="color: #666; font-size: 14px; margin-top: 30px;">
//               Sent from ValueCode AI Platform<br>
//               Email: skdhanusri123@gmail.com
//             </p>
//           </div>
//         </div>
//       `,
//       attachments: [
//         {
//           filename: 'ai-saas-blueprint.pdf',
//           content: pdfBase64,
//           encoding: 'base64',
//           contentType: 'application/pdf'
//         }
//       ]
//     });

//     return NextResponse.json({ 
//       success: true, 
//       message: 'Email with PDF attachment sent successfully!' 
//     });

//   } catch (error) {
//     console.error('Email error:', error);
//     return NextResponse.json({ 
//       error: 'Failed to send email: ' + error.message 
//     }, { status: 500 });
//   }
// }
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const userEmail = formData.get('userEmail');
    const companyName = formData.get('companyName');
    const pdfFile = formData.get('pdfFile');

    if (!userEmail) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!pdfFile) {
      return NextResponse.json({ error: 'PDF file is required' }, { status: 400 });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'skdhanusri123@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Convert file to buffer
    const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());

    await transporter.sendMail({
      from: '"ValueCode AI" <skdhanusri123@gmail.com>',
      to: userEmail,
      subject: '🚀 Your AI SaaS Blueprint PDF is Ready!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0;">🚀 Your AI SaaS Blueprint is Ready!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Complete Application Development Plan</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <p>Hi there,</p>
            <p>Your custom AI SaaS application blueprint has been generated and is attached to this email as a PDF file.</p>
            
            ${companyName ? `<p><strong>Project:</strong> ${companyName}</p>` : ''}
            
            <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #667eea; margin-top: 0;">📎 What's included in your blueprint PDF:</h3>
              <ul>
                <li>Complete visual layout with all design elements and emojis</li>
                <li>Requested features and requirements</li>
                <li>Current challenges and improvements</li>
                <li>Technology stack recommendations</li>
                <li>4-week implementation timeline</li>
                <li>Strategic AI-powered recommendations</li>
                <li>Account setup requirements</li>
                <li>Platform integration details</li>
              </ul>
            </div>

            <p><strong>Attachment:</strong> <code>ai-saas-blueprint.pdf</code></p>
            
            <p>Simply download the attached PDF file to view your complete blueprint.</p>
            
            <p>Ready to bring your AI vision to life? Reply to this email to get started!</p>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              Sent from ValueCode AI Platform<br>
              Email: skdhanusri123@gmail.com
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'ai-saas-blueprint.pdf',
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email with PDF attachment sent successfully!' 
    });

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email: ' + error.message 
    }, { status: 500 });
  }
}