import jwt from "jsonwebtoken";
export const verifyOwnerToken = (req, res, next) => {
  try {
    console.log("verifyOwnerToken hit", req.cookies);
    const token = req.cookies.ownerAuthToken;
    if (!token) {
      return res.status(401).json({ message: "Owner authentication required" });
    }
      const payload = jwt.verify(token, process.env.AUTH_SECRET);
      req.owner = payload;
      next();
  } catch (err) {
    return res.status(401).json({
        message:"Invalid or expired owner authentication",
    });
  }
};
