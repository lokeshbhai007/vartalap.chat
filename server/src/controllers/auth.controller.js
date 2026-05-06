//four

import User from "../models/User.schema.js";
import bcrypt from 'bcryptjs'
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be atleast 6 character",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const user = await User.findOne({email})

    if(user){
        return res.status(400).json({
        message: "Email already exists",
      });
    }

    // hash the password before save it
    const Salt = await bcrypt.genSalt(10)  //how long the random string will be
    const hashedPassword = await bcrypt.hash(password, Salt)

    console.log(hashedPassword);
    
    const newUser = new User({
        fullName,
        email,
        password : hashedPassword
    })

    if(newUser){
        //generate token
        const savedUser = await newUser.save()
        generateToken(savedUser._id , res)

        res.status(201).json({ 
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            profilePic: newUser.profilePic,

        });

    }else{
        return res.status(400).json({ message: "Invalid user data" });
    }

    // TODO add a welcome message send in email

  } catch (error) {
    console.log("Error in Auth sign up controller : "  + error.message)
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const signin = (req, res) => {
  
};
