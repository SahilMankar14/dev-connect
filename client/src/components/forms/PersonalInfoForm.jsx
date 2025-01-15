import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    profileUrl: "",
    jobDetails: {
      title: "",
      company: "",
      designation: "",
      location: "",
      experience: "",
    },
    contactDetails: {
      phone: "",
      email: "",
      address: "",
    },
    skills: [],
    education: [
      {
        degree: "",
        institution: "",
        year: {
          start: "",
          end: "",
        },
      },
    ],
    accomplishments: {
      workSamples: [],
      researchPapers: [],
      presentations: [],
      patents: [],
      certifications: [],
    },
    socialPlatforms: {
      linkedin: "",
      github: "",
      twitter: "",
      instagram: "",
    },
    personalDetails: {
      gender: "",
      maritalStatus: "",
      dob: "",
      workPermit: "",
      languages: [
        {
          name: "",
          proficiency: {
            read: false,
            write: false,
            speak: false,
          },
        },
      ],
    },
    profileSummary: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/personal-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Personal information saved successfully!");
      } else {
        throw new Error("Failed to save personal information");
      }
    } catch (error) {
      alert("Error saving personal information: " + error.message);
    }
  };

  const handleInputChange = (e, section, field, subfield = null) => {
    const value = e.target.value;
    if (subfield) {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: {
            ...prev[section][field],
            [subfield]: value,
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    }
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "",
          institution: "",
          year: { start: "", end: "" },
        },
      ],
    }));
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim());
    setFormData((prev) => ({ ...prev, skills }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-6">
      <CardHeader>
        <CardTitle>Personal Information Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="profileUrl">Profile URL</Label>
              <Input
                id="profileUrl"
                value={formData.profileUrl}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    profileUrl: e.target.value,
                  }))
                }
                required
              />
            </div>

            {/* Job Details */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Job Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobDetails.title}
                    onChange={(e) =>
                      handleInputChange(e, "jobDetails", "title")
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.jobDetails.company}
                    onChange={(e) =>
                      handleInputChange(e, "jobDetails", "company")
                    }
                  />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Contact Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.contactDetails.phone}
                    onChange={(e) =>
                      handleInputChange(e, "contactDetails", "phone")
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.contactDetails.email}
                    onChange={(e) =>
                      handleInputChange(e, "contactDetails", "email")
                    }
                    required
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Input
                id="skills"
                value={formData.skills.join(", ")}
                onChange={handleSkillsChange}
                required
              />
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Education</h3>
              {formData.education.map((edu, index) => (
                <div key={index} className="space-y-2 p-4 border rounded">
                  <Input
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) => {
                      const newEducation = [...formData.education];
                      newEducation[index].degree = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        education: newEducation,
                      }));
                    }}
                  />
                  <Input
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) => {
                      const newEducation = [...formData.education];
                      newEducation[index].institution = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        education: newEducation,
                      }));
                    }}
                  />
                </div>
              ))}
              <Button type="button" onClick={addEducation}>
                Add Education
              </Button>
            </div>

            {/* Profile Summary */}
            <div>
              <Label htmlFor="profileSummary">Profile Summary</Label>
              <Textarea
                id="profileSummary"
                value={formData.profileSummary}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    profileSummary: e.target.value,
                  }))
                }
                required
                className="h-32"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
