import React from "react";

const PersonalDetailsSection = ({ personalDetails, handleNestedChange }) => {
  return (
    <div className="mb-6">
      <h6 className="text-xl font-semibold mb-4">Personal Details</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="gender" className="font-medium">
            Gender
          </label>
          <select
            id="gender"
            value={personalDetails.gender}
            onChange={(e) =>
              handleNestedChange("personalDetails.gender", e.target.value)
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
            value={personalDetails.maritalStatus}
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
            value={personalDetails.dob}
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
            value={personalDetails.workPermit}
            onChange={(e) =>
              handleNestedChange("personalDetails.workPermit", e.target.value)
            }
            className="border rounded p-2"
            placeholder="Work permit status"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsSection;
