import React from "react";

const ContactDetailsSection = ({ contactDetails, handleNestedChange }) => {
  return (
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
            value={contactDetails.email}
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
            value={contactDetails.phone}
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
            value={contactDetails.address}
            onChange={(e) =>
              handleNestedChange("contactDetails.address", e.target.value)
            }
            className="border rounded p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsSection;
