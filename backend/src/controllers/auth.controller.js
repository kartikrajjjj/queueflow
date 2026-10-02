import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = async (user)=>{
    const payload = {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
    };
    const token = await jwt.sign(payload, process.env.AUTH_SECRET,{
        expiresIn: "1d",
    });
    return token;
};

export const signUp = async (req, res) => {
  try {
    const data = req.body;
    const user = UserModel(data);
    await user.save();
    const userObject = user.toObject();
    delete userObject.password;
    res.json(userObject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User does not exist" });
    const isLogged = await bcrypt.compare(password, user.password);
    if (!isLogged)
      return res.status(401).json({ message: "Incorrect password" });
    const token = await createToken(user);
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.ENVIRONMENT !== "DEV",
      sameSite: process.env.ENVIRONMENT === "DEV" ? "lax" : "none",
      path: "/login",
      domain: undefined,
      maxAge: 86400000,
    });
    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
