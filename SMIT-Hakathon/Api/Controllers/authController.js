import User from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import createError from "../Utils/error.js";

dotenv.config();

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    // res.status(500).send("Something went wrong...");
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User Not Found!"));
    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isValidPassword)
      return next(createError(400, "Invalid Password or Username!"));

    // GENERATE A JWT COOKIE TOKEN
    const expiryDate = 1000 * 60 * 60 * 24;

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: true,
      },
      process.env.JWT_KEY,
      { expiresIn: expiryDate }
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        // secure: true,  should be open at the prouction time
        maxExpiryTime: expiryDate,
      })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
