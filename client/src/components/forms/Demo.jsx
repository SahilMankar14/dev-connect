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

  const [formData, setFormData] = useState(initialState);

  const handleNestedChange = (path, value) => {
    const keys = path.split(".");
    setFormData((prevData) => {
      const newData = { ...prevData };
      let current = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleArrayChange = (path, index, value) => {
    const keys = path.split(".");
    setFormData((prevData) => {
      const newData = { ...prevData };
      let current = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]][index] = value;
      return newData;
    });
  };

  const addArrayItem = (path, template = "") => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      let current = newData;
      const keys = path.split(".");

      for (const key of keys) {
        current = current[key];
      }

      if (Array.isArray(current)) {
        if (typeof template === "object") {
          current.push({ ...template });
        } else {
          current.push(template);
        }
      }

      return newData;
    });
  };

  const removeArrayItem = (path, index) => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      let current = newData;
      const keys = path.split(".");

      for (const key of keys) {
        current = current[key];
      }

      if (Array.isArray(current) && current.length > 1) {
        current.splice(index, 1);
      }

      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="container mt-10 p-10">
      <div className="mb-6">
        <h4 className="text-2xl font-bold">Update Your Personal Info</h4>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Job Details Section */}
            <div className="mb-6">
              <h6 className="text-xl font-semibold mb-4">Job Details</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="font-medium">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={formData.jobDetails.title}
                    onChange={(e) =>
                      handleNestedChange("jobDetails.title", e.target.value)
                    }
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.jobDetails.company}
                    onChange={(e) =>
                      handleNestedChange("jobDetails.company", e.target.value)
                    }
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="designation" className="font-medium">
                    Designation
                  </label>
                  <input
                    id="designation"
                    type="text"
                    value={formData.jobDetails.designation}
                    onChange={(e) =>
                      handleNestedChange(
                        "jobDetails.designation",
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="font-medium">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={formData.jobDetails.location}
                    onChange={(e) =>
                      handleNestedChange("jobDetails.location", e.target.value)
                    }
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="experience" className="font-medium">
                    Experience
                  </label>
                  <input
                    id="experience"
                    type="text"
                    value={formData.jobDetails.experience}
                    onChange={(e) =>
                      handleNestedChange(
                        "jobDetails.experience",
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="mb-6">
              <h6 className="text-xl font-semibold mb-4">Contact Details</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.contactDetails.email}
                    onChange={(e) =>
                      handleNestedChange("contactDetails.email", e.target.value)
                    }
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.contactDetails.phone}
                    onChange={(e) =>
                      handleNestedChange("contactDetails.phone", e.target.value)
                    }
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="address" className="font-medium">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={formData.contactDetails.address}
                    onChange={(e) =>
                      handleNestedChange(
                        "contactDetails.address",
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-6">
              <h6 className="text-xl font-semibold mb-4">Skills</h6>
              <div className="space-y-2">
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) =>
                        handleArrayChange("skills", index, e.target.value)
                      }
                      className="border rounded p-2 flex-1"
                      placeholder="Add a skill"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem("skills", index)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("skills")}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add Skill
                </button>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-6">
              <h6 className="text-xl font-semibold mb-4">Education</h6>
              {formData.education.map((edu, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-medium">Degree</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) =>
                          handleNestedChange(
                            `education.${index}.degree`,
                            e.target.value
                          )
                        }
                        className="border rounded p-2"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-medium">Institution</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) =>
                          handleNestedChange(
                            `education.${index}.institution`,
                            e.target.value
                          )
                        }
                        className="border rounded p-2"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-medium">Start Year</label>
                      <input
                        type="date"
                        value={edu.year.start}
                        onChange={(e) =>
                          handleNestedChange(
                            `education.${index}.year.start`,
                            e.target.value
                          )
                        }
                        className="border rounded p-2"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-medium">End Year</label>
                      <input
                        type="date"
                        value={edu.year.end}
                        onChange={(e) =>
                          handleNestedChange(
                            `education.${index}.year.end`,
                            e.target.value
                          )
                        }
                        className="border rounded p-2"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeArrayItem("education", index)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove Education
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem("education", {
                    degree: "",
                    institution: "",
                    year: { start: "", end: "" },
                  })
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Education
              </button>
            </div>

            {/* Accomplishments Section */}
            <div className="mb-6">
              <h6 className="text-xl font-semibold mb-4">Accomplishments</h6>

              {/* Work Samples */}
              <div className="mb-4">
                <label className="font-medium block mb-2">Work Samples</label>
                {formData.accomplishments.workSamples.map((sample, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={sample}
                      onChange={(e) =>
                        handleArrayChange(
                          "accomplishments.workSamples",
                          index,
                          e.target.value
                        )
                      }
                      className="border rounded p-2 flex-1"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        removeArrayItem("accomplishments.workSamples", index)
                      }
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("accomplishments.workSamples")}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add Work Sample
                </button>
              </div>

              {/* Research Papers */}
              <div className="mb-4">
                <label className="font-medium block mb-2">
                  Research Papers
                </label>
                {formData.accomplishments.researchPapers.map((paper, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={paper}
                      onChange={(e) =>
                        handleArrayChange(
                          "accomplishments.researchPapers",
                          index,
                          e.target.value
                        )
                      }
                      className="border rounded p-2 flex-1"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        removeArrayItem("accomplishments.researchPapers", index)
                      }
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("accomplishments.researchPapers")}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add Research Paper
                </button>
              </div>

              {/* Similar structures for presentations, patents, and certifications */}
              {/* Presentations */}
              <div className="mb-4">
                <label className="font-medium block mb-2">Presentations</label>
                {formData.accomplishments.presentations.map(
                  (presentation, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={presentation}
                        onChange={(e) =>
                          handleArrayChange(
                            "accomplishments.presentations",
                            index,
                            e.target.value
                          )
                        }
                        className="border rounded p-2 flex-1"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          removeArrayItem(
                            "accomplishments.presentations",
                            index
                          )
                        }
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  )
                )}
                {/* Continuing from previous code - Presentations button */}
                <button
                  type="button"
                  onClick={() => addArrayItem("accomplishments.presentations")}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add Presentation
                </button>
              </div>

              {/* Patents */}
              <div className="mb-4">
                <label className="font-medium block mb-2">Patents</label>
                {formData.accomplishments.patents.map((patent, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={patent}
                      onChange={(e) =>
                        handleArrayChange(
                          "accomplishments.patents",
                          index,
                          e.target.value
                        )
                      }
                      className="border rounded p-2 flex-1"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        removeArrayItem("accomplishments.patents", index)
                      }
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("accomplishments.patents")}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add Patent
                </button>
              </div>

              {/* Certifications */}
              <div className="mb-4">
                <label className="font-medium block mb-2">Certifications</label>
                {formData.accomplishments.certifications.map((cert, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={cert}
                      onChange={(e) =>
                        handleArrayChange(
                          "accomplishments.certifications",
                          index,
                          e.target.value
                        )
                      }
                      className="border rounded p-2 flex-1"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        removeArrayItem("accomplishments.certifications", index)
                      }
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("accomplishments.certifications")}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add Certification
                </button>
              </div>
            </div>

            {/* Social Platforms Section */}
            <div className="mb-6">
              <h6 className="text-xl font-semibold mb-4">Social Platforms</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="linkedin" className="font-medium">
                    LinkedIn
                  </label>
                  <input
                    id="linkedin"
                    type="url"
                    value={formData.socialPlatforms.linkedin}
                    onChange={(e) =>
                      handleNestedChange(
                        "socialPlatforms.linkedin",
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                    placeholder="LinkedIn profile URL"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="github" className="font-medium">
                    GitHub
                  </label>
                  <input
                    id="github"
                    type="url"
                    value={formData.socialPlatforms.github}
                    onChange={(e) =>
                      handleNestedChange(
                        "socialPlatforms.github",
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                    placeholder="GitHub profile URL"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="twitter" className="font-medium">
                    Twitter
                  </label>
                  <input
                    id="twitter"
                    type="url"
                    value={formData.socialPlatforms.twitter}
                    onChange={(e) =>
                      handleNestedChange(
                        "socialPlatforms.twitter",
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                    placeholder="Twitter profile URL"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="instagram" className="font-medium">
                    Instagram
                  </label>
                  <input
                    id="instagram"
                    type="url"
                    value={formData.socialPlatforms.instagram}
                    onChange={(e) =>
                      handleNestedChange(
                        "socialPlatforms.instagram",
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                    placeholder="Instagram profile URL"
                  />
                </div>
              </div>
            </div>

            {/* Personal Details Section */}
            <div className="mb-6">
              <h6 className="text-xl font-semibold mb-4">Personal Details</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="gender" className="font-medium">
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={formData.personalDetails.gender}
                    onChange={(e) =>
                      handleNestedChange(
                        "personalDetails.gender",
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="maritalStatus" className="font-medium">
                    Marital Status
                  </label>
                  <select
                    id="maritalStatus"
                    value={formData.personalDetails.maritalStatus}
                    onChange={(e) =>
                      handleNestedChange(
                        "personalDetails.maritalStatus",
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                  >
                    <option value="">Select marital status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="dob" className="font-medium">
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    type="date"
                    value={formData.personalDetails.dob}
                    onChange={(e) =>
                      handleNestedChange("personalDetails.dob", e.target.value)
                    }
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="workPermit" className="font-medium">
                    Work Permit
                  </label>
                  <input
                    id="workPermit"
                    type="text"
                    value={formData.personalDetails.workPermit}
                    onChange={(e) =>
                      handleNestedChange(
                        "personalDetails.workPermit",
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                    placeholder="Work permit status"
                  />
                </div>
              </div>
            </div>

            {/* Languages Section */}
            <div className="mb-6">
              <h6 className="text-xl font-semibold mb-4">Languages</h6>
              {formData.personalDetails.languages.map((language, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-medium">Language Name</label>
                      <input
                        type="text"
                        value={language.name}
                        onChange={(e) =>
                          handleNestedChange(
                            `personalDetails.languages.${index}.name`,
                            e.target.value
                          )
                        }
                        className="border rounded p-2"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-medium">Proficiency</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={language.proficiency.read}
                            onChange={(e) =>
                              handleNestedChange(
                                `personalDetails.languages.${index}.proficiency.read`,
                                e.target.checked
                              )
                            }
                            className="form-checkbox"
                          />
                          Read
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={language.proficiency.write}
                            onChange={(e) =>
                              handleNestedChange(
                                `personalDetails.languages.${index}.proficiency.write`,
                                e.target.checked
                              )
                            }
                            className="form-checkbox"
                          />
                          Write
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={language.proficiency.speak}
                            onChange={(e) =>
                              handleNestedChange(
                                `personalDetails.languages.${index}.proficiency.speak`,
                                e.target.checked
                              )
                            }
                            className="form-checkbox"
                          />
                          Speak
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      removeArrayItem("personalDetails.languages", index)
                    }
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove Language
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem("personalDetails.languages", {
                    name: "",
                    proficiency: { read: false, write: false, speak: false },
                  })
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Language
              </button>
            </div>

            {/* Profile Summary Section */}
            <div className="mb-6">
              <h6 className="text-xl font-semibold mb-4">Profile Summary</h6>
              <div className="flex flex-col gap-2">
                <textarea
                  id="profileSummary"
                  value={formData.profileSummary}
                  onChange={(e) =>
                    handleNestedChange("profileSummary", e.target.value)
                  }
                  className="border rounded p-2 min-h-[100px]"
                  placeholder="Write a brief summary about yourself..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                py-2 px-6 rounded-lg shadow-md hover:shadow-lg 
                transform hover:-translate-y-0.5 transition-all duration-150"
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