import OwnerModel from "./owner.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createBusiness = async (req, res) => {
  try {
    const data = {
      businessname: req.body.businessname,
      ownerpassword: req.body.ownerpassword,
      owner: req.user.id,
    };
    const owner = new OwnerModel(data);
    await owner.save();
    res.json(owner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createOwnerToken = (owner) => {
  const payload = {
    ownerId: owner._id,
    userId: owner.owner,
  };

  return jwt.sign(payload, process.env.AUTH_SECRET, {
    expiresIn: "1d",
  });
};

export const ownerLogin = async (req, res) => {
  try {
    const { ownerpassword } = req.body;
    const owner = await OwnerModel.findOne({ owner: req.user.id });
    if (!owner) {
      return res.status(404).json({ message: "Business not registered" });
    }
    if (!ownerpassword) {
      return res.status(400).json({
        message: "Owner password is required",
      });
    }
    const isLogged = await bcrypt.compare(ownerpassword, owner.ownerpassword);
    if (!isLogged) {
      return res.status(401).json({ message: "Incorrect Password" });
    }
    const token = createOwnerToken(owner);
    res.cookie("ownerAuthToken", token, {
      httpOnly: true,
      secure: process.env.ENVIRONMENT !== "DEV",
      sameSite: process.env.ENVIRONMENT === "DEV" ? "lax" : "none",
      path: "/",
      maxAge: 86400000,
    });
    res.json({ message: "Owner login successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const checkOwner = async (req, res) => {
  try {
    const owner = await OwnerModel.findOne({
      owner: req.user.id,
    });
    if (!owner) {
      return res.status(404).json({ message: "Business not registered" });
    }

    res.json({ registered: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
