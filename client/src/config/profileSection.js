// Configuration for all profile sections
export const profileSections = [
  {
    id: "jobDetails",
    title: "Job Details",
    editable: true,
  },
  {
    id: "contactDetails",
    title: "Contact Details",
    editable: true,
  },
  {
    id: "socialPlatforms",
    title: "Social Platforms",
    editable: true,
  },
  {
    id: "personalDetails",
    title: "Personal Details",
    editable: false, // Complex structure, needs custom editor
  },
  {
    id: "skills",
    title: "Skills",
    editable: false, // Array data, needs custom editor
  },
  {
    id: "education",
    title: "Education",
    editable: false, // Complex structure, needs custom editor
  },
  {
    id: "accomplishments",
    title: "Accomplishments",
    editable: false, // Complex structure, needs custom editor
  },
  {
    id: "profileSummary",
    title: "Profile Summary",
    editable: true,
  },
];
