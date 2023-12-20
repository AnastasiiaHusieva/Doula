const express = require("express");
const router = express.Router();
const Appointments = require("../models/appointments.model");
const User = require("../models/User.model");
router.get("/", async (req, res, next) => {
  try {
    const response = await Appointments.find();
    res.json(response);
  } catch (err) {
    console.log("Failed to create the form", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/create", async (req, res) => {
  const {
    userId,
    fullName,
    email,
    phoneNumber,
    appointmentDate,
    appointmentTime,
    message,
  } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }
  try {
    console.log("Received a form submission with email:", email);
    const newAppointment = await Appointments.create({
      fullName,
      userId,
      email,
      phoneNumber,
      appointmentDate,
      appointmentTime,
      message,
    });
    await User.findByIdAndUpdate(userId, {
      $push: { appointments: newAppointment._id },
    });
    console.log("New appointment created:", newAppointment);
    res.status(201).json(newAppointment);
  } catch (err) {
    console.log("Failed to create the form", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
