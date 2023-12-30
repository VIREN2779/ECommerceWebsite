import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "23bba1c6c4c47e0464d1e9a169765f95a643cbb82b221f6fb6db9d4c560caef5a3e38f2436255ab5cff74649db828c65a552b16a824a1a75a52426a15a8c2492", {
    expiresIn: "30d",
  });
};

export default generateToken;
