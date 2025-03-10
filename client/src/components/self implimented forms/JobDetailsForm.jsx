import React, { useState } from "react";

const JobDetailsForm = () => {
  const initialState = {
    title: "",
    company: "",
    designation: "",
    location: "",
    experience: "",
  };
  const [jobDetails, setJobDetails] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <h3>Job Details</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-medium">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={jobDetails.title}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="font-medium">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={jobDetails.company}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="designation" className="font-medium">
                Designation
              </label>
              <input
                id="designation"
                name="designation"
                type="text"
                value={jobDetails.designation}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="font-medium">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={jobDetails.location}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="experience" className="font-medium">
                Experience
              </label>
              <input
                id="experience"
                name="experience"
                type="text"
                value={jobDetails.experience}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobDetailsForm;
