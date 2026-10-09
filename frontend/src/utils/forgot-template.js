
import env from "dotenv";
env.config();

export const forgotPasswordTemplate = (fullname, link) => {
  return `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset your QueueFlow password</title>
</head>

<body style="margin:0;padding:0;background-color:#f5f7f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">

  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    Reset your QueueFlow password. This link expires in 15 minutes.
  </div>

  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <table width="600" cellpadding="0" cellspacing="0" role="presentation"
          style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">

          <!-- Header and Logo -->
          <tr>
            <td align="center" style="padding:30px 24px 24px;">

              <img
                src="https://raw.githubusercontent.com/kartikrajjjj/queueflow/main/frontend/public/queueflow-logo.png"
                alt="QueueFlow Logo"
                width="64"
                height="64"
                style="display:block;width:64px;height:64px;object-fit:contain;margin:0 auto 12px;border:0;"
              />

              <h1 style="margin:0;font-size:28px;font-weight:700;letter-spacing:-1px;color:#176b60;">
                QueueFlow
              </h1>

              <p style="margin:8px 0 0;font-size:13px;color:#6b7280;">
                Your time matters.
              </p>

            </td>
          </tr>

          <tr>
            <td style="height:3px;background:#176b60;font-size:0;line-height:0;">
              &nbsp;
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding:32px 28px 28px;">

              <h2 style="margin:0 0 20px;font-size:22px;font-weight:600;color:#111827;">
                Reset your password
              </h2>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;">
                Hi <strong>${fullname}</strong>,
              </p>

              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#4b5563;">
                We received a request to reset your QueueFlow password.
                Click the button below to choose a new password.
                This link expires in <strong>15 minutes</strong>.
              </p>

              <!-- Reset Button -->
              <table cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 24px;">
                <tr>
                  <td align="center" bgcolor="#176b60" style="border-radius:7px;">
                    <a
                      href="${link}"
                      target="_blank"
                      style="display:inline-block;padding:13px 24px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:7px;"
                    >
                      Reset password
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 10px;font-size:13px;line-height:1.6;color:#6b7280;">
                If the button doesn't work, copy and paste this link into your browser:
              </p>

              <p style="margin:0 0 24px;word-break:break-all;font-size:13px;line-height:1.6;">
                <a
                  href="${link}"
                  target="_blank"
                  style="color:#176b60;text-decoration:underline;"
                >
                  ${link}
                </a>
              </p>

              <p style="margin:0;font-size:13px;line-height:1.7;color:#6b7280;">
                If you didn't request a password reset, you can safely ignore this email.
                Your password won't change unless you use the link above.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:22px 24px;background:#f9fafb;border-top:1px solid #e5e7eb;">

              <p style="margin:0 0 8px;font-size:13px;color:#6b7280;">
                Thank you for using
                <strong style="color:#176b60;">QueueFlow</strong>.
              </p>

              <p style="margin:0;font-size:12px;line-height:1.6;color:#9ca3af;">
                Need help?
                <a
                  href="mailto:${process.env.SENDER_EMAIL}"
                  style="color:#176b60;text-decoration:underline;"
                >
                  Contact support
                </a>
              </p>

              <p style="margin:14px 0 0;font-size:11px;color:#9ca3af;">
                This is an automated security email. Please do not share your reset link.
              </p>

            </td>
          </tr>

        </table>

        <!-- Copyright -->
        <p style="margin:16px 0 0;font-size:11px;color:#9ca3af;text-align:center;">
          &copy; ${new Date().getFullYear()} QueueFlow. All rights reserved.
        </p>

      </td>
    </tr>
  </table>

</body>
</html>
`;
};
