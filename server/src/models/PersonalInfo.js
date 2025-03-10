const mongoose = require("mongoose");
const User = require("./User");

const PersonalInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  profileUrl: {
    type: String,
    required: true,
  },
  jobDetails: {
    title: String,
    company: String,
    designation: String,
    location: String,
    experience: { type: String },
  },
  contactDetails: {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  skills: {
    type: [String],
    required: true,
  },
  education: [
    {
      degree: String,
      institution: String,
      year: {
        start: String,
        end: String,
      },
    },
  ],
  accomplishments: {
    workSamples: [String],
    researchPapers: [String],
    presentations: [String],
    patents: [String],
    certifications: [String],
  },
  socialPlatforms: {
    linkedin: String,
    github: String,
    twitter: String,
    instagram: String,
  },
  personalDetails: {
    gender: String,
    maritalStatus: String,
    dob: Date,
    workPermit: String,
    languages: [
      {
        name: String,
        proficiency: {
          read: Boolean,
          write: Boolean,
          speak: Boolean,
        },
      },
    ],
  },
  profileSummary: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PersonalInfo", PersonalInfoSchema);
