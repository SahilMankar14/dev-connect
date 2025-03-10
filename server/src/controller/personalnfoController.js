const User = require("../models/User");
const mongoose = require("mongoose");
const PersonalInfo = require("../models/PersonalInfo");

exports.insertPersonalInfo = async (req, res) => {
  try {
    const { formData, userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    // Validate required fields
    if (!formData) {
      return res.status(400).json({
        success: false,
        message: "Form data is required",
      });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId);

    // Check if user exists
    const userExists = await User.findById(userObjectId);
    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const personalInfo = await PersonalInfo.create({
      ...formData,
      userId: userObjectId,
      profileUrl: "https://www.linkedin.com",
    });

    res.status(201).json({
      success: true,
      message: "Personal info created",
      data: personalInfo,
    });
  } catch (error) {
    console.error("Error in insertPersonalInfo:", error);
    res.status(400).json({
      success: false,
      message: error.message || "Error creating personal info",
    });
  }
};

exports.getPersonalInfo = async (req, res) => {
  try {
    const { userEmail } = req.body;

    const personalInfo = await PersonalInfo.findOne({
      "contactDetails.email": userEmail,
    });

    if (!personalInfo) {
      return res.status(404).json({
        success: false,
        message: "No details exists with given email",
      });
    }

    res.status(201).json({
      success: true,
      message: "Details found successfully",
      data: personalInfo,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Error finding data",
    });
  }
};
