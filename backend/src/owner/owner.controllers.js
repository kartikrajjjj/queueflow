import OwnerModel from "./owner.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createBusiness = async (req,res)=>{
    try{
        const data=req.body;
        const owner = new OwnerModel(data);
        await owner.save();
        res.json(owner);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const ownerLogin = async (req, res) => {
  try {
    console.log("Entered ownerLogin");
    const { ownerpassword } = req.body;
    const owner = await OwnerModel.findOne({ owner: req.owner.id });
    if (!ownerpassword) {
      //want to navigate to set password form
    }
    const isLogged = await bcrypt.compare(ownerpassword, owner.ownerpassword);
    if (!isLogged) {
      return res.status(401).json({ message: "Incorrect Password" });
    }
    const token = await createBusinessToken(owner);
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