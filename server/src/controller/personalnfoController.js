const User = require("../models/User");
const mongoose = require("mongoose");
const PersonalInfo = require("../models/PersonalInfo");

exports.insertPersonalInfo = async (req, res) => {
  try {
    const { formData, userId } = req.body;

    const userObjectId = new mongoose.Types.ObjectId(userId);

    const personalInfo = await PersonalInfo.create({
      ...formData,
      userId: userObjectId,
    });

    res.status(201).json({ success: true, message: "Personal info created" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
