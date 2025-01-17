import React, { useState } from "react";

const PersonalInfoForm = () => {
  const initialState = {
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
      emial: "",
      address: "",
    },
    skills: [],
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

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <div className="container mt-10 p-10">
      <div className="mb-6">
        <h4>Update Your personal info</h4>
      </div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-6">
              <h6 className="mb-2">Job Details</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    type="text"
                    value={formData.jobDetails.title}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    type="text"
                    value={formData.jobDetails.company}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="designation">Designation</label>
                  <input
                    id="designation"
                    type="text"
                    value={formData.jobDetails.designation}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="location">Location</label>
                  <input
                    id="location"
                    type="text"
                    value={formData.jobDetails.location}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="experience">Experience</label>
                  <input
                    id="experience"
                    type="text"
                    value={formData.jobDetails.experience}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="mb-2">Contact Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="text"
                    value={formData.contactDetails.email}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    value={formData.contactDetails.phone}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    type="text"
                    value={formData.contactDetails.address}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-6">
              <h4 className="mb-2">Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="skill">Skill</label>
                  <input
                    id="skill"
                    type="text"
                    value={formData.skills[0]}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-6">
              <h4 className="mb-2">Education</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="degree">Degree</label>
                  <input
                    id="degree"
                    type="text"
                    value={formData.education[0].degree}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="institution">Institution</label>
                  <input
                    id="institution"
                    type="text"
                    value={formData.education[0].institution}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="start">Start Date</label>
                  <input
                    id="start"
                    type="text"
                    value={formData.education[0].year.start}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="end">End Date </label>
                  <input
                    id="end"
                    type="text"
                    value={formData.education[0].year.end}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>

            {/* Accomplishments Section */}
            <div className="mb-6">
              <h4 className="mb-2">Accomplishments</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="workSamples">Work Samples</label>
                  <input
                    id="workSamples"
                    type="text"
                    value={formData.accomplishments.workSamples[0]}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="researchPapers">Research Papers</label>
                  <input
                    id="researchPapers"
                    type="text"
                    value={formData.accomplishments.researchPapers[0]}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="presentations">Presentations</label>
                  <input
                    id="presentations"
                    type="text"
                    value={formData.accomplishments.presentations[0]}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="patents">Patents</label>
                  <input
                    id="patents"
                    type="text"
                    value={formData.accomplishments.patents[0]}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="certifications">Certifications</label>
                  <input
                    id="certifications"
                    type="text"
                    value={formData.accomplishments.certifications[0]}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>

            {/* Social Platforms Section */}
            <div className="mb-6">
              <h4 className="mb-2">Social Platforms</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="linkedin">LinkedIn</label>
                  <input
                    id="linkedin"
                    type="text"
                    value={formData.socialPlatforms.linkedin}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="github">GitHub</label>
                  <input
                    id="github"
                    type="text"
                    value={formData.socialPlatforms.github}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="twitter">Twitter</label>
                  <input
                    id="twitter"
                    type="text"
                    value={formData.socialPlatforms.twitter}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="instagram">Instagram</label>
                  <input
                    id="instagram"
                    type="text"
                    value={formData.socialPlatforms.instagram}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>

            {/* Personal Details Section */}
            <div className="mb-6">
              <h4 className="mb-2">Personal Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="gender">Gender</label>
                  <input
                    id="gender"
                    type="text"
                    value={formData.personalDetails.gender}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="maritalStatus">Marital Status</label>
                  <input
                    id="maritalStatus"
                    type="text"
                    value={formData.personalDetails.maritalStatus}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    id="dob"
                    type="text"
                    value={formData.personalDetails.dob}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="workPermit">Work Permit</label>
                  <input
                    id="workPermit"
                    type="text"
                    value={formData.personalDetails.workPermit}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>

            {/* Languages Section */}
            <div className="mb-6">
              <h4 className="mb-2">Languages</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.personalDetails.languages[0].name}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="proficiency">Proficiency</label>
                  <input
                    id="proficiency"
                    type="text"
                    value={
                      formData.personalDetails.languages[0].proficiency.read
                    }
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>

            {/* Profile Summary Section */}
            <div className="mb-6">
              <h4 className="mb-2">Profile Summary</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <input
                    id="profileSummary"
                    type="text"
                    value={formData.profileSummary}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                   py-2 px-6 rounded-lg shadow-md hover:shadow-lg 
                   transform hover:-translate-y-0.5 transition-all duration-150 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
