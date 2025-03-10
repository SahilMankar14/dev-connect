import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import JobDetailsSection from "./JobDetailsSection";
import ContactDetailsSection from "./ContactDetailsSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSections";
import SocialPlatformsSection from "./SocialPlatformsSections";
import PersonalDetailsSection from "./PersonalDetailsSection";
import LanguagesSection from "./LanguagesSection";
import ProfileSummarySection from "./ProfileSummarySection";
import FormButtons from "./FormButtons";
import { initialFormState } from "./formInitialState";

const PersonalInfoForm = ({ onClose, user }) => {
  const [formData, setFormData] = useState(initialFormState);
  const { user: userData } = useAuth();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const userId = userData._id;
      const userId = "67780590532ea6d1b692b7df";
      const response = await axios.post(
        "http://localhost:5000/api/personalDetails/personalinfo",
        { formData, userId }
      );
      alert("Personal info updated successfully");
      // onClose();
      console.log(response);
    } catch (error) {
      console.log("Error:", error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while saving personal info");
      }
    }
  };

  return (
    <div className="max-h-[80vh]">
      <div className="mb-6">
        <h4 className="text-2xl font-bold">Update Your Personal Info</h4>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <JobDetailsSection
              jobDetails={formData.jobDetails}
              handleNestedChange={handleNestedChange}
            />

            <ContactDetailsSection
              contactDetails={formData.contactDetails}
              handleNestedChange={handleNestedChange}
            />

            <SkillsSection
              skills={formData.skills}
              handleArrayChange={handleArrayChange}
              addArrayItem={addArrayItem}
              removeArrayItem={removeArrayItem}
            />

            <EducationSection
              education={formData.education}
              handleNestedChange={handleNestedChange}
              addArrayItem={addArrayItem}
              removeArrayItem={removeArrayItem}
            />

            <SocialPlatformsSection
              socialPlatforms={formData.socialPlatforms}
              handleNestedChange={handleNestedChange}
            />

            <PersonalDetailsSection
              personalDetails={formData.personalDetails}
              handleNestedChange={handleNestedChange}
            />

            <LanguagesSection
              languages={formData.personalDetails.languages}
              handleNestedChange={handleNestedChange}
              addArrayItem={addArrayItem}
              removeArrayItem={removeArrayItem}
            />

            <ProfileSummarySection
              profileSummary={formData.profileSummary}
              handleNestedChange={handleNestedChange}
            />

            <FormButtons onClose={onClose} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
