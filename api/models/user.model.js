import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["patient", "doctor"], // Rôle de l'utilisateur
      required: true,
    },
    // Informations spécifiques au docteur
    diplome: {
      type: String,
      required: function () {
        return this.role === "doctor";
      }, // Requis si le rôle est 'doctor'
    },
    experience: {
      type: String,
      required: function () {
        return this.role === "doctor";
      }, // Requis si le rôle est 'doctor'
    },
    dateNaissance: {
      type: Date,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
