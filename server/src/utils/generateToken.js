import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const { JWT_SECRET, NODE_ENV } = process.env;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  // SET THE TOKEN IN THE COOKIE
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //in milisecond
    httpOnly: true, //prevent the XSS attack : cross - site scripting
    sameSite: "strict", //prevent the CSRF attack
    secure: process.env.NODE_ENV === "development" ? false : true,
  });

  return token;
};
