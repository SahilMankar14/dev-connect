import React from "react";

const SocialPlatformsSection = ({ socialPlatforms, handleNestedChange }) => {
  return (
    <div className="mb-6">
      <h6 className="text-xl font-semibold mb-4">Social Platforms</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="linkedin" className="font-medium">
            LinkedIn
          </label>
          <input
            id="linkedin"
            type="url"
            value={socialPlatforms.linkedin}
            onChange={(e) =>
              handleNestedChange("socialPlatforms.linkedin", e.target.value)
            }
            className="border rounded p-2"
            placeholder="LinkedIn profile URL"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="github" className="font-medium">
            GitHub
          </label>
          <input
            id="github"
            type="url"
            value={socialPlatforms.github}
            onChange={(e) =>
              handleNestedChange("socialPlatforms.github", e.target.value)
            }
            className="border rounded p-2"
            placeholder="GitHub profile URL"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="twitter" className="font-medium">
            Twitter
          </label>
          <input
            id="twitter"
            type="url"
            value={socialPlatforms.twitter}
            onChange={(e) =>
              handleNestedChange("socialPlatforms.twitter", e.target.value)
            }
            className="border rounded p-2"
            placeholder="Twitter profile URL"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="instagram" className="font-medium">
            Instagram
          </label>
          <input
            id="instagram"
            type="url"
            value={socialPlatforms.instagram}
            onChange={(e) =>
              handleNestedChange("socialPlatforms.instagram", e.target.value)
            }
            className="border rounded p-2"
            placeholder="Instagram profile URL"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialPlatformsSection;
