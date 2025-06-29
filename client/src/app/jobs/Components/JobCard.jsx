// components/JobCard.js
import { FiMapPin, FiHome, FiClock, FiChevronRight, FiDollarSign, FiBriefcase } from 'react-icons/fi';

const JobCard = ({ job, onClick }) => (
  <div
    onClick={() => onClick(job._id)}
    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer group"
  >
    <div className="flex items-start justify-between mb-6">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-3">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          <FiChevronRight className="h-6 w-6 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="bg-gray-50 p-2 rounded-lg">
              <FiHome className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{job.company}</p>
              <p className="text-sm text-gray-500">Company</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-gray-600">
            <div className="bg-gray-50 p-2 rounded-lg">
              <FiMapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{job.location}</p>
              <p className="text-sm text-gray-500">Location</p>
            </div>
          </div>
          
          {job.createdAt && (
            <div className="flex items-center gap-3 text-gray-600">
              <div className="bg-gray-50 p-2 rounded-lg">
                <FiClock className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{new Date(job.createdAt).toLocaleDateString()}</p>
                <p className="text-sm text-gray-500">Posted</p>
              </div>
            </div>
          )}
        </div>

        {job.description && (
          <p className="text-gray-700 mb-6 leading-relaxed">
            {job.description.length > 150 ? `${job.description.substring(0, 150)}...` : job.description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <FiBriefcase className="h-4 w-4" />
            {job.category}
          </span>
          {job.salary && (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-50 text-green-700 border border-green-200">
              <FiDollarSign className="h-4 w-4" />
              {job.salary}
            </span>
          )}
          {job.type && (
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-purple-50 text-purple-700 border border-purple-200">
              {job.type}
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default JobCard;