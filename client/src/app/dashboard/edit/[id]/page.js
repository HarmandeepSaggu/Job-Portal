'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { FiPlus } from 'react-icons/fi';
import FormInput from '../../Components/Forminput';
import FormSection from '../../Components/FormSection';
import PageHeader from '../../Components/PageHeader';
import Link from 'next/link';

export default function EditJobPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    category: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch job by ID
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`, {
          credentials: 'include',
        });

        if (res.status === 401) {
          toast.error('Please log in to continue');
          setTimeout(() => router.push('/login'), 1500);
          return;
        }

        if (!res.ok) throw new Error('Failed to fetch job data');
        const data = await res.json();
        setForm(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load job details');
        setLoading(false);
      }
    };

    if (id) fetchJob();
  }, [id, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.status === 401) {
        toast.error('Please log in to continue');
        setTimeout(() => router.push('/login'), 1500);
        return;
      }

      if (res.ok) {
        toast.success('Job updated successfully! Redirecting to dashboard...');
        setTimeout(() => router.push('/dashboard'), 1500);
      } else {
        const data = await res.json();
        toast.error(data.message || 'Failed to update job');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred while updating the job');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-center text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-8">
          <FormSection 
            title="Edit Job Information"
            icon={
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Job Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Software Engineer"
                required
              />
              <FormInput
                label="Company"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="e.g. Amazon"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Location"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. WORK FROM HOME"
                required
              />
              <FormInput
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Select a category"
                type="select"
                required
              />
            </div>
            
            <FormInput
              label="Job Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="e.g. Looking for experienced devs."
              type="textarea"
              rows={6}
              required
            />
          </FormSection>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
              <Link
                href="/dashboard"
                className="px-6 py-4 text-gray-700 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-center"
              >
                Cancel
              </Link>
              <button
                onClick={handleSubmit}
                className="inline-flex items-center justify-center px-6 py-4 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-xl transition-colors text-center"
              >
                <FiPlus className="w-5 h-5 mr-2" />
                Update Job Posting
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
      />
    </div>
  );
}