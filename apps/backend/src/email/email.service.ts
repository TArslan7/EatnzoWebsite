import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor() {
    // Use SMTP for email (configure with your email provider)
    // For production: Use SendGrid, AWS SES, Mailgun, etc.
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendVerificationEmail(email: string, token: string, name: string) {
    const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/verify-email?token=${token}`;

    // DEVELOPMENT MODE: Log to console instead of sending real email
    if (process.env.NODE_ENV === 'development' || !process.env.SMTP_USER || process.env.SMTP_USER === 'your-mailtrap-username') {
      console.log('\n📧 ===== VERIFICATION EMAIL (DEVELOPMENT MODE) =====');
      console.log(`To: ${email}`);
      console.log(`Subject: Verify Your Eatnzo Account`);
      console.log(`\nVerification Link:`);
      console.log(verificationUrl);
      console.log(`\nCopy this link and paste it in your browser to verify!`);
      console.log('==================================================\n');
      return true;
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Verify Your Eatnzo Account',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0;">🍽️ Eatnzo</h1>
            </div>
            
            <div style="background: #f5f5f5; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 10px 10px;">
              <h2 style="color: #333; margin-top: 0;">Welcome to Eatnzo, ${name}!</h2>
              
              <p style="color: #666; font-size: 16px;">
                Thank you for signing up! Please verify your email address to complete your registration and start ordering.
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${verificationUrl}" 
                   style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                          color: white; 
                          padding: 15px 40px; 
                          text-decoration: none; 
                          border-radius: 5px; 
                          display: inline-block; 
                          font-weight: bold;
                          font-size: 16px;">
                  Verify Email Address
                </a>
              </div>
              
              <p style="color: #999; font-size: 14px; margin-top: 30px;">
                Or copy and paste this link into your browser:<br>
                <a href="${verificationUrl}" style="color: #667eea; word-break: break-all;">${verificationUrl}</a>
              </p>
              
              <p style="color: #999; font-size: 14px; margin-top: 30px;">
                This link will expire in 24 hours. If you didn't create an account with Eatnzo, please ignore this email.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
              <p>© ${new Date().getFullYear()} Eatnzo. All rights reserved.</p>
            </div>
          </body>
        </html>
      `,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      this.logger.log(`Verification email sent to ${email}: ${info.messageId}`);
      return true;
    } catch (error) {
      this.logger.error(`Failed to send verification email to ${email}:`, error);
      return false;
    }
  }

  async sendPasswordResetEmail(email: string, token: string, name: string) {
    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${token}`;

    // DEVELOPMENT MODE: Log to console instead of sending real email
    if (process.env.NODE_ENV === 'development' || !process.env.SMTP_USER || process.env.SMTP_USER === 'your-mailtrap-username') {
      console.log('\n📧 ===== PASSWORD RESET EMAIL (DEVELOPMENT MODE) =====');
      console.log(`To: ${email}`);
      console.log(`Subject: Reset Your Eatnzo Password`);
      console.log(`\nReset Link:`);
      console.log(resetUrl);
      console.log(`\nCopy this link and paste it in your browser to reset!`);
      console.log('==================================================\n');
      return true;
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Reset Your Eatnzo Password',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0;">🍽️ Eatnzo</h1>
            </div>
            
            <div style="background: #f5f5f5; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 10px 10px;">
              <h2 style="color: #333; margin-top: 0;">Password Reset Request</h2>
              
              <p style="color: #666; font-size: 16px;">
                Hello ${name},<br><br>
                We received a request to reset your password. Click the button below to create a new password.
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${resetUrl}" 
                   style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                          color: white; 
                          padding: 15px 40px; 
                          text-decoration: none; 
                          border-radius: 5px; 
                          display: inline-block; 
                          font-weight: bold;
                          font-size: 16px;">
                  Reset Password
                </a>
              </div>
              
              <p style="color: #999; font-size: 14px; margin-top: 30px;">
                Or copy and paste this link into your browser:<br>
                <a href="${resetUrl}" style="color: #667eea; word-break: break-all;">${resetUrl}</a>
              </p>
              
              <p style="color: #999; font-size: 14px; margin-top: 30px;">
                This link will expire in 24 hours. If you didn't request a password reset, please ignore this email.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
              <p>© ${new Date().getFullYear()} Eatnzo. All rights reserved.</p>
            </div>
          </body>
        </html>
      `,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      this.logger.log(`Password reset email sent to ${email}: ${info.messageId}`);
      return true;
    } catch (error) {
      this.logger.error(`Failed to send password reset email to ${email}:`, error);
      return false;
    }
  }
}

