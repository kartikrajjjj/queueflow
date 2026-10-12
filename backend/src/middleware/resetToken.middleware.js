
import jwt from "jsonwebtoken";

export const verifyTokenGuard = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({ message: "Reset token required" });
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer" || !token) {
      return res.status(401).json({ message: "Invalid authorization header" });
    }

    const payload = jwt.verify(token, process.env.FORGOT_TOKEN_SECRET);

    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired reset token",
    });
  }
};
