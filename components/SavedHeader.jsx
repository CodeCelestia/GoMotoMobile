export function SavedHeader({ totalSaved, wishlists, thisWeek }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 p-6 shadow-md">
      <h2 className="text-2xl font-bold text-white">My Saved Vehicles</h2>
      <p className="text-gray-300">Vehicles you've saved for future booking</p>

      {/* Stats Row */}
      <div className="mt-4 flex justify-end space-x-6 text-sm font-medium">
        <div className="text-blue-400">
          {totalSaved} <span className="text-gray-300">Total Saved</span>
        </div>
        <div className="text-green-400">
          {wishlists} <span className="text-gray-300">Wishlists</span>
        </div>
        <div className="text-purple-400">
          {thisWeek} <span className="text-gray-300">This Week</span>
        </div>
      </div>
    </div>
  );
}
