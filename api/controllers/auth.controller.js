import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const register = async (req, res, next) => {
  const { name, email, role, diplome, experience, dateNaissance, password } =
    req.body;
  if (!name || !email || !role || !password) {
    return next(errorHandler(400, "Tous les champs sont requis"));
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(errorHandler(400, "Un utilisateur avec cet email existe déjà"));
  }
  if (role === "doctor") {
    if (!diplome || !experience) {
      return next(
        errorHandler(
          "Les champs diplome et experience sont requis pour les docteurs",
          400
        )
      );
    }
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({
    name,
    email,
    role,
    diplome,
    experience,
    dateNaissance,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.json("Signup successful");
  } catch (error) {
    errorHandler(500, "Erreur lors de l'inscription");
  }
};
