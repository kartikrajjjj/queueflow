export const otpTemplate = (otp)=>{
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your OTP Code</title>
  <style>
    /* Email clients often ignore <style> tags, so use inline CSS for safety */
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:40px 0;">
    <tr>
      <td align="center">
        <table width="420" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.08); overflow:hidden;">
          <!-- Header -->
          <tr>
            <td align="center" style="background:#007bff; color:#ffffff; padding:20px 0;">
              <h2 style="margin:0; font-size:22px;">🔐 Secure Verification</h2>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px 25px; text-align:center; color:#333333;">
              <h3 style="margin-bottom:10px;">Your One-Time Password (OTP)</h3>
              <p style="font-size:15px; color:#666666;">
                Use the following OTP to complete your verification. This code is valid for <strong>5 minutes</strong>.
              </p>

              <div style="font-size:32px; letter-spacing:8px; margin:25px 0; color:#007bff; font-weight:bold;">
               ${otp}
              </div>

              <p style="font-size:14px; color:#888;">
                Please do not share this code with anyone for security reasons.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background:#f8f9fa; padding:15px; font-size:12px; color:#999999;">
              © 2025 Your Company Name. All rights reserved.<br>
              Need help? <a href="#" style="color:#007bff; text-decoration:none;">Contact Support</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    
    `;
}