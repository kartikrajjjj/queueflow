import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateOTP } from "../../../frontend/src/utils/generateOTP.js";
import { sendMail } from "../../../frontend/src/utils/mail.js";
import { otpTemplate } from "../../../frontend/src/utils/otp.template.js";
import { forgotPasswordTemplate } from "../../../frontend/src/utils/forgot-template.js";

export const createToken = async (user)=>{
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
    const user = new UserModel(data);
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
      path: "/",
      domain: undefined,
      maxAge: 86400000,
    });
    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const OTP = generateOTP();
    const isEmail = await UserModel.findOne({ email });
    if (isEmail) {
      return res
        .status(400)
        .json({ message: "This email is already registered" });
    }

    const sent = await sendMail(email, "OTP for signup", otpTemplate(OTP));

    if (!sent) {
      return res.status(500).json({
        message: "Email failed to send",
        success: false,
      });
    }

    res.json({
      message: "Email sent successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const logout = async (req, res)=>{
  try{
    res.clearCookie("authToken", {
    httpOnly: true,
    secure: process.env.ENVIRONMENT !== "DEV",
    sameSite: process.env.ENVIRONMENT === "DEV" ? "lax" : "none",
    path: "/",
  });
  res.clearCookie("ownerAuthToken", {
    httpOnly: true,
    secure: process.env.ENVIRONMENT !== "DEV",
    sameSite: process.env.ENVIRONMENT === "DEV" ? "lax" : "none",
    path: "/",
  });
  res.status(200).json({message: "Logout successfully"});
  }catch(err){
    res.status(500).json({message: err.message || "Logout failed"});

  }
};

export const forgotPassword = async (req,res)=>{
  try{
    const {email} = req.body;
    const user= await UserModel.findOne({email});
    if(!user) return res.status(404).json({
      message: "User does not exists"
    });

    const token = jwt.sign(
      { id: user._id},
      process.env.FORGOT_TOKEN_SECRET,
      {expiresIn: "15m"},
    );
    const link=`${process.env.DOMAIN}/forgot-password?token=${token}`;
    const sent = await sendMail(email, "Queueflow - forgot password ?",
      forgotPasswordTemplate(user.fullname, link),
    );

    if(!sent) return res.status(500).json({message: "Failed to send email"});

    res.json({message: "Please check your email to reset password"});
  }catch(err){
    return res.status(500).json({message: err.message});
  }
}