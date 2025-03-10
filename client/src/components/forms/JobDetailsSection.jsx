import React from "react";

const JobDetailsSection = ({ jobDetails, handleNestedChange }) => {
  return (
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
            value={jobDetails.title}
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
            value={jobDetails.company}
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
            value={jobDetails.designation}
            onChange={(e) =>
              handleNestedChange("jobDetails.designation", e.target.value)
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
            value={jobDetails.location}
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
            value={jobDetails.experience}
            onChange={(e) =>
              handleNestedChange("jobDetails.experience", e.target.value)
            }
            className="border rounded p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetailsSection;
