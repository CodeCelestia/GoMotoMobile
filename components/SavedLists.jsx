import { useState } from "react";

export function SavedLists() {
  const [activeTab, setActiveTab] = useState("My Saved Vehicles");

  return (
    <div className="rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 p-4 shadow-md">
      {/* Tabs */}
      <div className="flex items-center space-x-6 border-b border-gray-600 pb-2">
        <button
          onClick={() => setActiveTab("My Saved Vehicles")}
          className={`flex items-center space-x-2 text-sm font-medium ${
            activeTab === "My Saved Vehicles"
              ? "text-white border-b-2 border-blue-400 pb-1"
              : "text-gray-300"
          }`}
        >
          <span>My Saved Vehicles</span>
          <span className="rounded-full bg-gray-600 px-2 text-xs">0</span>
        </button>

        <button
          onClick={() => setActiveTab("New List")}
          className={`text-sm font-medium ${
            activeTab === "New List"
              ? "text-white border-b-2 border-blue-400 pb-1"
              : "text-gray-300"
          }`}
        >
          + New List
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4 text-gray-400">
        {activeTab === "My Saved Vehicles" ? (
          <p>No saved vehicles yet.</p>
        ) : (
          <p>Create a new list here...</p>
        )}
      </div>
    </div>
  );
}
