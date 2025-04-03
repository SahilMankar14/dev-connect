import { useState, useEffect } from "react";
import axios from "axios";

export const useProfileData = (userEmail) => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetails = async () => {
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

  const updateSection = async (section, data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/personalDetails/updatepersonalinfo",
        {
          section,
          data,
          userEmail,
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

  useEffect(() => {
    if (userEmail) {
      fetchDetails();
    }
  }, [userEmail]);

  return { personalInfo, isLoading, error, fetchDetails, updateSection };
};
