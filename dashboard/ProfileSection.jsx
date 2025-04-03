import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import Avatar from "../../assets/Avatar.jpeg";
import PersonalInfoForm from "../forms/index";
import edit from "../../assets/edit.png";

// Reusable Components (as before)
const ProfileHeader = ({ user, openModal }) => (
  <div className="flex justify-end mb-4">
    <button
      className="bg-blue-500 px-4 py-2 text-white font-semibold border rounded-lg"
      onClick={openModal}
    >
      Create/Edit Profile
    </button>
  </div>
);

const UserBasicInfo = ({ user, avatar }) => (
  <div className="flex p-2 mb-4 bg-white shadow-lg rounded-xl">
    <div className="mr-4">
      <img src={avatar} alt="Profile" className="w-40 h-40 rounded-full" />
    </div>
    <div className="w-1/2">
      <InfoRow label="Name" value={user?.name} />
      <InfoRow label="Email" value={user?.email} />
      <InfoRow label="Phone No" value={user?.phoneno} />
    </div>
  </div>
);

const InfoRow = ({ label, value }) => (
  <p className="mb-2">
    <span className="font-bold">{label}:</span> {value || "N/A"}
  </p>
);

const SectionWrapper = ({ title, handleSectionModal, children }) => (
  <div className="rounded-xl  mb-4 bg-white shadow-md">
    <div className="bg-blue-50 p-4 flex items-center justify-between">
      <h2 className="text-xl font-bold">{title}</h2>
      <div>
        <img
          src={edit}
          alt="update info"
          className="w-6 h-6 "
          onClick={() => handleSectionModal(title)}
        />
      </div>
    </div>
    {children}
  </div>
);

const DetailsList = ({ data, renderItem }) => (
  <div className="p-4">
    <ul className="space-y-2 grid grid-cols-2">
      {data.map((item, index) => renderItem(item, index))}
    </ul>
  </div>
);

const UpdateDetail = ({ data, handleChange, handleSubmit }) => {
  // console.log("data:", data);
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl h-80 overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Update Information
      </h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(data).map(([key, value]) => {
          return (
            <div key={key} className="flex flex-col mb-2">
              <label className="text-base font-bold text-gray-800 capitalize py-2">
                {key}:
              </label>
              <input
                className="p-2 border rounded-lg border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                value={value}
                onChange={(e) => handleChange(e)}
                name={key}
              />
            </div>
          );
        })}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 mt-4 border rounded-lg px-12 py-2 font-[Inter] text-white font-medium transition duration-300"
          >
            Submit Changes
          </button>
        </div>
      </form>
    </div>
  );
};

const UpdatePersonalDetails = ({ data, handleSubmit }) => {
  const [formData, setFormData] = useState(data);

  <div className="max-w-md mx-auto bg-white p-8 rounded-xl h-80 overflow-y-auto scrollbar-hide">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Update Information
    </h2>
    <form onSubmit={handleSubmit}>
      {Object.entries(data).map(([key, value]) => {
        return (
          <div key={key} className="flex flex-col mb-2">
            <label className="text-base font-bold text-gray-800 capitalize py-2">
              {key}:
            </label>
            <input
              className="p-2 border rounded-lg border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              value={value}
              onChange={(e) => handleChange(e)}
              name={key}
            />
          </div>
        );
      })}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 mt-4 border rounded-lg px-12 py-2 font-[Inter] text-white font-medium transition duration-300"
        >
          Submit Changes
        </button>
      </div>
    </form>
  </div>;
};

const ProfileSection = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openSectionModal, setOpenSectionModal] = useState(false);
  const [activeModal, setActiveModal] = useState("null");
  const [activeModalState, setActiveModalState] = useState(null);

  const fetchDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/personalDetails/getpersonalinfo",
        { userEmail: "bhushan@gmail.com" }
      );
      setPersonalInfo(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [user]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toCamelCase = (str) =>
    str
      .toLowerCase()
      .split(" ")
      .map((word, index) =>
        index === 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join("");

  const handleSectionModal = (title) => {
    console.log("function is called");
    console.log("title:", title);
    setOpenSectionModal(!openSectionModal);

    const titleInCamelCase = toCamelCase(title);
    setActiveModal(titleInCamelCase);
    setActiveModalState(personalInfo[titleInCamelCase]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActiveModalState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/personalDetails/updatepersonalinfo",
        {
          section: activeModal,
          data: activeModalState,
          userEmail: "bhushan@gmail.com",
        }
      );

      if (response.data.success) {
        console.log("Information updated successfully");
        setOpenSectionModal(false);
        // Update the main data to reflect changes
        setPersonalInfo((prev) => ({
          ...prev,
          [activeModal]: activeModalState,
        }));
      } else {
        console.log("Failed to update information");
      }
    } catch (error) {
      console.error("Error updating information:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile: {error.message}</div>;
  if (!personalInfo) return <div>No profile information available</div>;

  return (
    <div className="p-4">
      {/* <ProfileHeader user={user} openModal={openModal} /> */}
      {/* <UserBasicInfo user={user} avatar={Avatar} /> */}

      {/* Job Details */}
      <SectionWrapper
        title="Job Details"
        handleSectionModal={handleSectionModal}
      >
        <DetailsList
          data={[
            { label: "Title", value: personalInfo.jobDetails?.title },
            { label: "Company", value: personalInfo.jobDetails?.company },
            {
              label: "Designation",
              value: personalInfo.jobDetails?.designation,
            },
            { label: "Location", value: personalInfo.jobDetails?.location },
            { label: "Experience", value: personalInfo.jobDetails?.experience },
          ]}
          renderItem={(item, index) => (
            <li key={index}>
              <div className="font-semibold">{item.label}:</div>
              <div>{item.value || "N/A"}</div>
            </li>
          )}
        />
      </SectionWrapper>

      {/* Contact Details */}
      <SectionWrapper
        title="Contact Details"
        handleSectionModal={handleSectionModal}
      >
        <DetailsList
          data={[
            { label: "Phone", value: personalInfo.contactDetails?.phone },
            { label: "Email", value: personalInfo.contactDetails?.email },
            { label: "Address", value: personalInfo.contactDetails?.address },
          ]}
          renderItem={(item, index) => (
            <li key={index}>
              <div className="font-semibold">{item.label}:</div>
              <div>{item.value || "N/A"}</div>
            </li>
          )}
        />
      </SectionWrapper>

      {/* Social Platforms */}
      <SectionWrapper
        title="Social Platforms"
        handleSectionModal={handleSectionModal}
      >
        <DetailsList
          data={[
            {
              label: "LinkedIn",
              value: personalInfo.socialPlatforms?.linkedin,
            },
            { label: "GitHub", value: personalInfo.socialPlatforms?.github },
            { label: "Twitter", value: personalInfo.socialPlatforms?.twitter },
            {
              label: "Instagram",
              value: personalInfo.socialPlatforms?.instagram,
            },
          ]}
          renderItem={(item, index) => (
            <li key={index}>
              <div className="font-semibold">{item.label}:</div>
              <a
                href={item.value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline block"
              >
                {item.value || "N/A"}
              </a>
            </li>
          )}
        />
      </SectionWrapper>

      {/* Personal Details */}
      <SectionWrapper title="Personal Details">
        <DetailsList
          data={[
            { label: "Gender", value: personalInfo.personalDetails?.gender },
            {
              label: "Marital Status",
              value: personalInfo.personalDetails?.maritalStatus,
            },
            {
              label: "Date of Birth",
              value: new Date(
                personalInfo.personalDetails?.dob
              ).toLocaleDateString(),
            },
            {
              label: "Work Permit",
              value: personalInfo.personalDetails?.workPermit,
            },
          ]}
          renderItem={(item, index) => (
            <li key={index}>
              <div className="font-semibold">{item.label}:</div>
              <div>{item.value || "N/A"}</div>
            </li>
          )}
        />

        {/* Languages */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Languages</h3>
          {personalInfo.personalDetails?.languages?.map((lang, index) => (
            <div key={index} className="mb-2">
              <strong>{lang.name}</strong>
              <div className="pl-4 flex gap-4">
                <p>Read: {lang.proficiency.read ? "Yes" : "No"}</p>
                <p>Write: {lang.proficiency.write ? "Yes" : "No"}</p>
                <p>Speak: {lang.proficiency.speak ? "Yes" : "No"}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper title="Skills">
        <ul className="list list-disc px-10 py-4">
          {personalInfo.skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </SectionWrapper>

      {/* Education */}
      <SectionWrapper title="Education">
        {personalInfo.education?.map((edu, index) => (
          <div key={index} className="mb-4 p-4">
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p>
              <strong>Institution:</strong> {edu.institution}
            </p>
            <p>
              <strong>Duration:</strong> {edu.year.start} - {edu.year.end}
            </p>
          </div>
        ))}
      </SectionWrapper>

      {/* Accomplishments Section */}
      <SectionWrapper title="Accomplishments">
        {Object.entries(personalInfo.accomplishments || {}).map(
          ([category, items]) => (
            <div key={category} className="p-4">
              <h3 className="text-lg font-semibold capitalize">{category}</h3>
              {items &&
              items.length > 0 &&
              items.some((item) => item && item.trim() !== "") ? (
                <ul className="list-disc pl-6">
                  {items.map((item, index) =>
                    item && item.trim() !== "" ? (
                      <li key={index} className="text-gray-700">
                        {item}
                      </li>
                    ) : null
                  )}
                </ul>
              ) : (
                <p className="text-gray-500">No {category} available</p>
              )}
            </div>
          )
        )}
      </SectionWrapper>

      {/* Profile Summary */}
      <SectionWrapper title="Profile Summary">
        <p className="p-4">
          {personalInfo.profileSummary || "No summary available"}
        </p>
      </SectionWrapper>

      {/* Modal for editing profile */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px] max-h-[90vh] overflow-y-auto scrollbar-none">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <PersonalInfoForm onClose={closeModal} user={user} />
          </div>
        </div>
      )}

      {/* Modal for editing each sections */}
      {openSectionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Section</h2>
              <button
                onClick={() => setOpenSectionModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            {/* Your form or content here */}
            {/* <p>Modal content goes here</p> */}
            <UpdateDetail
              data={activeModalState}
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
