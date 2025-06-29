'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import { FiPlus } from 'react-icons/fi'; // React icon for the submit button
import FormInput from '../Components/Forminput';
import FormSection from '../Components/FormSection';
import PageHeader from '../Components/PageHeader';

export default function CreateJobPage() {
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    category: '',
    description: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success('Job posted successfully! Redirecting to dashboard...');
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } else {
        const data = await res.json();
        toast.error(data.message || 'Failed to create job posting');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      toast.error('An error occurred while creating the job. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader />

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-8">
          <FormSection 
            title="Job Information"
            icon={<FiPlus className="w-5 h-5 text-blue-600" />}
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
                Create Job Posting
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
