import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    console.log("verifyToken hit", req.cookies);
    const token = req.cookies.authToken;
    if (!token) return res.status(400).json({message: "Authentication required"});
    const payload = jwt.verify(token, process.env.AUTH_SECRET);
    console.log(payload);
    req.user = payload;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({message: "Unauthorized"});
  }
};
