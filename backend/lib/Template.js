export const emailTemplate = (url) => {
  return  (`
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
        }
        .email-container {
          max-width: 600px;
          margin: auto;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }
        .header {
          background: #ff9800;
          color: white;
          text-align: center;
          padding: 20px;
          font-size: 20px;
        }
        .body {
          padding: 20px;
          color: #333333;
          line-height: 1.6;
        }
        .footer {
          text-align: center;
          background: #eeeeee;
          padding: 10px;
          font-size: 12px;
          color: #777777;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          PASSWORD RESET
        </div>
        <div class="body">
          <p>Hi there,</p>
          <p>Thank you for signing up for our service. We're excited to have you onboard!</p>
          <p>Feel free to reach out if you have any questions.</p>
          <p>Here's your password reset link:</p>
          <a style={{text-align : "center"}} href="${url}">Reset Password</a>
          <p>If you didn't request a password reset, please ignore this email.</p>
        </div>
        <div class="footer">
          © 2025 Your App. All Rights Reserved.
        </div>
      </div>
    </body>
  </html>
`)
}