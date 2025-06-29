'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaCalendarAlt,
  FaBriefcase,
  FaArrowLeft,
  FaBookmark,
  FaShare,
} from 'react-icons/fa';

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params?.id;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!jobId) return;

    const fetchJobDetail = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/${jobId}`);
        if (!res.ok) throw new Error('Failed to fetch job');
        const data = await res.json();
        setJob(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [jobId]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;
  if (!job) return <p className="p-4 text-gray-500">No job found.</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Module */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{job.title}</h1>
                <div className="flex items-center text-xl text-gray-700 mb-6">
                  <FaBuilding className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="font-semibold">{job.company}</span>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 text-gray-500" />
                    {job.location}
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700">
                    <FaBriefcase className="w-4 h-4 mr-2 text-blue-500" />
                    {job.category}
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-sm font-medium text-green-700">
                    <FaCalendarAlt className="w-4 h-4 mr-2 text-green-500" />
                    {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : 'Recently'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-sm">
                  Apply Now
                </button>
                <button className="flex items-center justify-center px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl font-medium transition-colors">
                  <FaBookmark className="w-4 h-4 mr-2" />
                  Save
                </button>
                <button className="flex items-center justify-center px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl font-medium transition-colors">
                  <FaShare className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>

            {/* Description Module */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h2>
              <div className="prose prose-gray max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-base">
                  {job.description}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Module */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-sm font-medium text-gray-500">Job ID</span>
                  <span className="text-sm font-semibold text-gray-900">#{jobId}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-sm font-medium text-gray-500">Posted</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {job.createdAt ? new Date(job.createdAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    }) : 'Recently'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-sm font-medium text-gray-500">Location</span>
                  <span className="text-sm font-semibold text-gray-900">{job.location}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-gray-500">Category</span>
                  <span className="text-sm font-semibold text-gray-900">{job.category}</span>
                </div>
              </div>
            </div>

            {/* Company Module */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">About Company</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <FaBuilding className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{job.company}</h4>
                  <p className="text-sm text-gray-500">View Company Profile</p>
                </div>
              </div>
            </div>

            {/* Apply Module */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Apply?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Join {job.company} and take your career to the next level.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}