import React, { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import axios from "axios";
import Avatar from "../../../../assets/Avatar.jpeg";

// Profile components
import ProfileHeader from "./ProfileHeader";
import UserBasicInfo from "./UserBasicInfo";
import SectionWrapper from "./SectionWrapper";
import UpdateDetail from "./UpdateDetail";

// Section components
import JobDetailsSection from "./sections/JobDetailsSection";
import ContactDetailsSection from "./sections/ContactDetailsSection";
import SocialPlatformsSection from "./sections/SocialPlatformsSection";
import PersonalDetailsSection from "./sections/PersonalDetailsSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import AccomplishmentsSection from "./sections/AccomplishmentsSection";
import ProfileSummarySection from "./sections/ProfileSummarySection";

// Forms
import PersonalInfoForm from "../forms";

// Configuration
import { profileSections } from "../../../../config/profileSection";

const ProfileSection = () => {
  const { user } = useAuth();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [sectionModalOpen, setSectionModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [activeSectionData, setActiveSectionData] = useState(null);

  const [personalInfo, setPersonalInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile data
  const fetchDetails = async (userEmail) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/personalDetails/getpersonalinfo",
        { userEmail }
      );
      setPersonalInfo(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update section data
  const updateSection = async (section, data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/personalDetails/updatepersonalinfo",
        {
          section,
          data,
          userEmail: "bhushan@gmail.com",
        }
      );

      if (response.data.success) {
        setPersonalInfo((prev) => ({
          ...prev,
          [section]: data,
        }));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error updating information:", error);
      return false;
    }
  };

  React.useEffect(() => {
    fetchDetails("bhushan@gmail.com");
  }, [user]);

  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);

  // Helper function to convert section title to camelCase for API
  const toCamelCase = (str) =>
    str
      .toLowerCase()
      .split(" ")
      .map((word, index) =>
        index === 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join("");

  const handleSectionModal = (title) => {
    const sectionId = toCamelCase(title);
    setActiveSection(sectionId);
    setActiveSectionData(personalInfo[sectionId]);
    setSectionModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActiveSectionData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await updateSection(activeSection, activeSectionData);
    if (success) {
      setSectionModalOpen(false);
    }
  };

  // Use email from auth if available, otherwise use default
  const userEmail = "bhushan@gmail.com";

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error)
    return (
      <div className="p-4 text-red-500">
        Error loading profile: {error.message}
      </div>
    );
  if (!personalInfo)
    return <div className="p-4">No profile information available</div>;

  return (
    <div className="p-4">
      <ProfileHeader user={user} openModal={openProfileModal} />
      <UserBasicInfo user={user} avatar={Avatar} />

      {/* Job Details */}
      <SectionWrapper
        title="Job Details"
        handleSectionModal={handleSectionModal}
      >
        <JobDetailsSection data={personalInfo.jobDetails} />
      </SectionWrapper>

      {/* Contact Details */}
      <SectionWrapper
        title="Contact Details"
        handleSectionModal={handleSectionModal}
      >
        <ContactDetailsSection data={personalInfo.contactDetails} />
      </SectionWrapper>

      {/* Social Platforms */}
      <SectionWrapper
        title="Social Platforms"
        handleSectionModal={handleSectionModal}
      >
        <SocialPlatformsSection data={personalInfo.socialPlatforms} />
      </SectionWrapper>

      {/* Personal Details */}
      <SectionWrapper
        title="Personal Details"
        handleSectionModal={handleSectionModal}
      >
        <PersonalDetailsSection data={personalInfo.personalDetails} />
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper title="Skills">
        <SkillsSection data={personalInfo.skills} />
      </SectionWrapper>

      {/* Education */}
      <SectionWrapper title="Education">
        <EducationSection data={personalInfo.education} />
      </SectionWrapper>

      {/* Accomplishments */}
      <SectionWrapper title="Accomplishments">
        <AccomplishmentsSection data={personalInfo.accomplishments} />
      </SectionWrapper>

      {/* Profile Summary */}
      <SectionWrapper title="Profile Summary">
        <ProfileSummarySection data={personalInfo.profileSummary} />
      </SectionWrapper>

      {/* Modal for editing profile */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px] max-h-[90vh] overflow-y-auto scrollbar-none">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <button
                onClick={closeProfileModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <PersonalInfoForm onClose={closeProfileModal} user={user} />
          </div>
        </div>
      )}

      {/* Modal for editing sections */}
      {sectionModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Section</h2>
              <button
                onClick={() => setSectionModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <UpdateDetail
              data={activeSectionData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
