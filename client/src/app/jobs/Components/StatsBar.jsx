// components/StatsBar.js
import { FiBriefcase, FiTrendingUp } from 'react-icons/fi';

const StatsBar = ({ totalJobs, filteredCount }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-3 rounded-lg">
            <FiBriefcase className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{filteredCount}</p>
            <p className="text-sm text-gray-600">Jobs Available</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-3 rounded-lg">
            <FiTrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{totalJobs}</p>
            <p className="text-sm text-gray-600">Total Listings</p>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">Updated daily</p>
        <p className="text-xs text-gray-400">Last update: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  </div>
);

export default StatsBar;