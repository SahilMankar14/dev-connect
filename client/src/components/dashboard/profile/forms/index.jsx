import React, { useState, useEffect } from "react";
import axios from "axios";

const PersonalInfoForm = ({ onClose, user }) => {
  const [formData, setFormData] = useState({
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
      languages: [],
    },
    skills: [],
    education: [],
    accomplishments: {
      certifications: [],
      awards: [],
      publications: [],
    },
    profileSummary: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch existing profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "http://localhost:5000/api/personalDetails/getpersonalinfo",
          { userEmail: user?.email || "bhushan@gmail.com" }
        );

        if (response.data.success && response.data.data) {
          setFormData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setError("Failed to load profile data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [user]);

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleArrayChange = (section, index, value) => {
    const newArray = [...formData[section]];
    newArray[index] = value;
    setFormData((prev) => ({
      ...prev,
      [section]: newArray,
    }));
  };

  const addArrayItem = (section) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], ""],
    }));
  };

  const removeArrayItem = (section, index) => {
    const newArray = [...formData[section]];
    newArray.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      [section]: newArray,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/personalDetails/saveprofile",
        {
          userEmail: user?.email || "bhushan@gmail.com",
          profileData: formData,
        }
      );

      if (response.data.success) {
        onClose();
      } else {
        setError("Failed to save profile data");
      }
    } catch (error) {
      console.error("Error saving profile data:", error);
      setError("Failed to save profile data");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-h-[70vh] overflow-y-auto p-2"
    >
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Job Details Section */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Job Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={formData.jobDetails.title || ""}
              onChange={(e) =>
                handleInputChange("jobDetails", "title", e.target.value)
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              value={formData.jobDetails.company || ""}
              onChange={(e) =>
                handleInputChange("jobDetails", "company", e.target.value)
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              value={formData.jobDetails.designation || ""}
              onChange={(e) =>
                handleInputChange("jobDetails", "designation", e.target.value)
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              value={formData.jobDetails.location || ""}
              onChange={(e) =>
                handleInputChange("jobDetails", "location", e.target.value)
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Experience
            </label>
            <input
              type="text"
              value={formData.jobDetails.experience || ""}
              onChange={(e) =>
                handleInputChange("jobDetails", "experience", e.target.value)
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Contact Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              value={formData.contactDetails.phone || ""}
              onChange={(e) =>
                handleInputChange("contactDetails", "phone", e.target.value)
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={formData.contactDetails.email || ""}
              onChange={(e) =>
                handleInputChange("contactDetails", "email", e.target.value)
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              value={formData.contactDetails.address || ""}
              onChange={(e) =>
                handleInputChange("contactDetails", "address", e.target.value)
              }
              rows="2"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Social Platforms Section */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Social Platforms</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              LinkedIn
            </label>
            <input
              type="url"
              value={formData.socialPlatforms.linkedin || ""}
              onChange={(e) =>
                handleInputChange("socialPlatforms", "linkedin", e.target.value)
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              GitHub
            </label>
            <input
              type="url"
              value={formData.socialPlatforms.github || ""}
              onChange={(e) =>
                handleInputChange("socialPlatforms", "github", e.target.value)
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Twitter
            </label>
            <input
              type="url"
              value={formData.socialPlatforms.twitter || ""}
              onChange={(e) =>
                handleInputChange("socialPlatforms", "twitter", e.target.value)
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Instagram
            </label>
            <input
              type="url"
              value={formData.socialPlatforms.instagram || ""}
              onChange={(e) =>
                handleInputChange(
                  "socialPlatforms",
                  "instagram",
                  e.target.value
                )
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Skills</h3>
        <div className="space-y-2">
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <input
                type="text"
                value={skill}
                onChange={(e) =>
                  handleArrayChange("skills", index, e.target.value)
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeArrayItem("skills", index)}
                className="ml-2 text-red-500"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem("skills")}
            className="mt-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-200"
          >
            + Add Skill
          </button>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Profile Summary</h3>
        <textarea
          value={formData.profileSummary || ""}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, profileSummary: e.target.value }))
          }
          rows="4"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save Profile"}
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
