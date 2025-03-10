import React from "react";

const PersonalDetails = () => {
  // Sample data - replace with your actual data
  const personalDetails = {
    gender: "male",
    maritalStatus: "single",
    dateOfBirth: "2/5/2025",
    workPermit: "India",
    languages: [
      {
        name: "English",
        read: true,
        write: true,
        speak: true,
      },
      {
        name: "Hindi",
        read: true,
        write: true,
        speak: true,
      },
    ],
  };

  // ProficiencyBadge component
  const ProficiencyBadge = ({ label, value }) => (
    <span
      className={`inline-block text-xs px-2 py-1 rounded-lg mr-2 ${
        value ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"
      }`}
    >
      {label}: {value ? "Yes" : "No"}
    </span>
  );

  return (
    <div className="w-full shadow-md rounded-xl overflow-hidden">
      {/* Sky blue header */}
      <div className="bg-blue-50 p-4">
        <h2 className="text-xl font-bold text-gray-800">Personal Details</h2>
      </div>

      {/* White content area */}
      <div className="bg-white p-4">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                {/* Placeholder for icon */}
                <span className="text-blue-600">👤</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm font-medium">Gender</div>
                <div className="font-medium">{personalDetails.gender}</div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                {/* Placeholder for icon */}
                <span className="text-blue-600">📅</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm font-medium">
                  Date of Birth
                </div>
                <div className="font-medium">{personalDetails.dateOfBirth}</div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                {/* Placeholder for icon */}
                <span className="text-blue-600">🗣️</span>
              </div>
              <div className="flex-1">
                <div className="text-gray-500 text-sm font-medium">
                  Languages
                </div>
                <div className="space-y-3 mt-1">
                  {personalDetails.languages.map((language, index) => (
                    <div key={index}>
                      <div className="font-medium">{language.name}</div>
                      <div className="mt-1">
                        <ProficiencyBadge label="Read" value={language.read} />
                        <ProficiencyBadge
                          label="Write"
                          value={language.write}
                        />
                        <ProficiencyBadge
                          label="Speak"
                          value={language.speak}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                {/* Placeholder for icon */}
                <span className="text-blue-600">💍</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm font-medium">
                  Marital Status
                </div>
                <div className="font-medium">
                  {personalDetails.maritalStatus}
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                {/* Placeholder for icon */}
                <span className="text-blue-600">📄</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm font-medium">
                  Work Permit
                </div>
                <div className="font-medium">{personalDetails.workPermit}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
