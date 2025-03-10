import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import Avatar from "../../assets/Avatar.jpeg";
// import PersonalInfoForm from "../forms/PersonalInfoForm";
import PersonalInfoForm from "../forms/index";
import axios from "axios";

const ProfileSection = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log(user);
  };

  const fetchDetails = async () => {
    try {
      const userEmail = "bhushan@gmail.com";

      const response = await axios.post(
        "http://localhost:5000/api/personalDetails/getpersonalinfo",
        { userEmail }
      );

      setPersonalInfo(response.data.data);
      console.log("Personal Info:", response.data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const accomplishmentsData = {
    workSamples: ["Portfolio website", "Open-source project"],
    researchPapers: ["AI in Healthcare", "Blockchain Security"],
    presentations: ["Tech Conference 2024"],
    patents: [],
    certifications: ["AWS Certified Developer"],
  };

  return (
    <div className=" p-4 ">
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 px-4 py-2 text-white font-semibold border rounded-lg"
          onClick={openModal}
        >
          Create/Edit Profile
        </button>
      </div>
      <div className="flex p-2 mb-2 bg-white rounded-xl">
        <div className="mr-4">
          <img src={Avatar} alt="Image" className="w-40 h-40 rounded-full" />
        </div>
        <div className="w-1/2">
          <h1 className="mb-2 ">
            <span className="font-bold">Name:</span> {user?.name}
          </h1>
          <p className="mb-2">
            <span className="font-bold">Email:</span> {user?.email}
          </p>
          <p className="mb-2">
            <span className="font-bold">Phone No:</span>
            {user?.phoneno}
          </p>
        </div>
      </div>

      {/* Job Details */}
      <div className="rounded-xl p-4 mb-2 bg-white ">
        <h2 className="text-xl font-bold mb-4">Jon Details</h2>
        <p>
          <span className="font-bold mr-2">Title:</span>
          {personalInfo?.jobDetails?.title}
        </p>
        <p>
          <span className="font-bold mr-2">Company:</span>
          {personalInfo?.jobDetails?.company}
        </p>
        <p>
          <span className="font-bold mr-2">Designation:</span>
          {personalInfo?.jobDetails?.designation}
        </p>
        <p>
          <span className="font-bold mr-2">Location:</span>
          {personalInfo?.jobDetails?.location}
        </p>
        <p>
          <span className="font-bold mr-2">Experience:</span>
          {personalInfo?.jobDetails?.experience}
        </p>
      </div>

      {/* Contact Details */}
      <div className="rounded-xl p-4 mb-2 bg-white ">
        <h2 className="text-xl font-bold mb-4">Contact Details</h2>
        <p>
          <span className="font-bold mr-2">Phone:</span>
          {personalInfo?.contactDetails?.phone}
        </p>
        <p>
          <span className="font-bold mr-2">Email:</span>
          {personalInfo?.contactDetails?.email}
        </p>
        <p>
          <span className="font-bold mr-2">Address:</span>
          {personalInfo?.contactDetails?.address}
        </p>
      </div>

      {/* Accomplishment Section */}
      <div className="rounded-xl p-4 mb-2 bg-white">
        <h2 className="text-xl font-bold mb-4">Accomplishments</h2>
        <ul className="space-y-4">
          {Object.entries(accomplishmentsData).map(
            ([key, values]) =>
              values.length > 0 && (
                <li key={key}>
                  <h3 className="text-lg font-semibold capitalize">{key}</h3>
                  <ul className="list-disc pl-6">
                    {values.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        {item || "N/A"}
                      </li>
                    ))}
                  </ul>
                </li>
              )
          )}
        </ul>
      </div>

      {/* Social Paltform */}
      <div className="rounded-xl p-4 mb-2 bg-white ">
        <h2 className="text-xl font-bold mb-4">Social Platforms</h2>
        <p>
          <span className="font-bold mr-2">linkedin:</span>
          {personalInfo?.socialPlatforms?.linkedin}
        </p>
        <p>
          <span className="font-bold mr-2">github:</span>
          {personalInfo?.socialPlatforms?.github}
        </p>
        <p>
          <span className="font-bold mr-2">twitter:</span>
          {personalInfo?.socialPlatforms?.twitter}
        </p>
        <p>
          <span className="font-bold mr-2">instagram:</span>
          {personalInfo?.socialPlatforms?.instagram}
        </p>
      </div>

      {/* Personal Details Section*/}
      <div className="rounded-xl p-4 mb-2 bg-white">
        <h2 className="text-xl font-bold mb-4">Personal Details</h2>
        <p>
          <strong className="mr-1">Gender:</strong>
          {personalInfo?.personalDetails?.gender}
        </p>
        <p>
          <strong className="mr-1">Marital Status:</strong>
          {personalInfo?.personalDetails?.maritalStatus}
        </p>
        <p>
          <strong className="mr-1">Date of Birth:</strong>
          {personalInfo?.personalDetails?.dob}
        </p>
        <p>
          <strong className="mr-1">Work Permit:</strong>
          {personalInfo?.personalDetails?.workPermit}
        </p>
        <ul>
          {personalInfo?.personalDetails?.languages?.map((item, index) => (
            <>
              <h4 key={index}>
                <strong className="mr-1">Language:</strong>
                {item.name}
              </h4>
              <li key={`${index}-read`}>
                Read:
                {item.proficiency.read ? "Yes" : "No"}
              </li>
              <li key={`${index}-write`}>
                Write:
                {item.proficiency.write ? "Yes" : "No"}
              </li>
              <li key={`${index}-speak`}>
                Speak:
                {item.proficiency.speak ? "Yes" : "No"}
              </li>
            </>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="rounded-xl p-4 mb-2 bg-white">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <ul>
          {personalInfo?.skills?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div className="rounded-xl p-4 mb-2 bg-white">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        {personalInfo?.education?.map((value, index) => (
          <div key={index} className="mb-2">
            <h1>
              <strong className="mr-2">Degree:</strong>
              {value.degree}
            </h1>
            <p>
              <strong className="mr-2">Institution & Year:</strong>
              {value.institution} || {value.year.start} - {value.year.end}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
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
            <PersonalInfoForm
              onClose={closeModal}
              user={user} // Pass the user data to the form
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
