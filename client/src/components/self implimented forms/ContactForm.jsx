import React from "react";

const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevData) => ({
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
      <h3>Contact Details</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.contactDetails.email}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-medium">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.contactDetails.phone}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="font-medium">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.contactDetails.address}
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

export default ContactForm;
