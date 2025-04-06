import React from "react";

const AccomplishmentsForm = ({
  data,
  handleChange,
  handleSubmit,
  addItem,
  removeItem,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-xl max-h-80 overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Update Accomplishments
      </h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(data).map(([category, items]) => (
          <div key={category} className="mb-4">
            <h3 className="text-lg font-semibold capitalize mb-2">
              {category}
            </h3>

            {items.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  className="p-2 flex-grow border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  value={item || ""}
                  onChange={(e) =>
                    handleChange(category, index, e.target.value)
                  }
                />
                <button
                  type="button"
                  onClick={() => removeItem(category, index)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => addItem(category)}
              className="mt-1 bg-blue-100 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-200 flex items-center text-sm"
            >
              <span className="mr-1">+</span> Add{" "}
              {category.charAt(0).toUpperCase() + category.slice(1, -1)}
            </button>
          </div>
        ))}

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 mt-4 border rounded-lg px-12 py-2 font-[Inter] text-white font-medium transition duration-300"
          >
            Submit Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccomplishmentsForm;
