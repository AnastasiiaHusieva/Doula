const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
// TODO: Please make sure you edit the User model to whatever makes sense in this case
const appointmentSchema = new Schema(
  {
    fullName: String,
    email: String,
    phoneNumber: Number, 
    appointmentDate: {
      type: Date,
    },
    appointmentTime: {
      type: String,
    },
    message: {
      type: String,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Appointments = model("Appointments", appointmentSchema);

module.exports = Appointments;
