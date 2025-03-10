export const initialFormState = {
  profileUrl: "",
  jobDetails: {
    title: "",
    company: "",
    designation: "",
    location: "",
    experience: "",
  },
  contactDetails: {
    phone: "",
    email: "",
    address: "",
  },
  skills: [""],
  education: [
    {
      degree: "",
      institution: "",
      year: {
        start: "",
        end: "",
      },
    },
  ],
  accomplishments: {
    workSamples: [""],
    researchPapers: [""],
    presentations: [""],
    patents: [""],
    certifications: [""],
  },
  socialPlatforms: {
    linkedin: "",
    github: "",
    twitter: "",
    instagram: "",
  },
  personalDetails: {
    gender: "",
    maritalStatus: "",
    dob: "",
    workPermit: "",
    languages: [
      {
        name: "",
        proficiency: {
          read: false,
          write: false,
          speak: false,
        },
      },
    ],
  },
  profileSummary: "",
};
