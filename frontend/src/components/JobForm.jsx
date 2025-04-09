import React from 'react';
import { locations } from '../utils/locations';
import { jobTypes } from '../utils/jobTypes';
import { useJobData } from '../contexts/JobDataContext';
import { createJob } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';

const JobForm = ({ setShowAddJob }) => {

  const { jobData, setJobData } = useJobData()

  // console.log("jobData state:", jobData);

  const handlePublish = async () => {
    try {
      // console.log("Publishing Job:", jobData);
      const response = await createJob(jobData);
      // console.log("Job posted successfully:", response.data);
      toast.success("Job posted successfully")

      setShowAddJob(false);
      setJobData({
        title: '',
        companyName: '',
        location: '',
        jobType: '',
        salaryMin: 0,
        salaryMax: 0,
        applicationDeadline: '',
        companyWebsite: '',
        jobDescription: '',
      });

    } catch (error) {
      // console.error("Error posting job:", error);
      toast.error("Error posting job:")
    }
  };


  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-30'>
      <div className='bg-white w-full sm:max-w-[70%] h-auto sm:h-[95%] p-5 overflow-clip flex justify-center items-center rounded-lg relative text-light'>
        <div>
          <div className='absolute top-3 right-3' onClick={() => setShowAddJob(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#636363">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>

        <div className='w-full px-3'>
          <div className='flex justify-center mt-5'>
            <span className='text-lg mb-8'>Create Job Opening</span>
          </div>

          <div className='grid bg-[#fff] grid-cols-1 sm:grid-cols-2 mx-auto gap-2 mt-0'>


            {/* Job Title */}
            <div className='flex flex-col'>
              <label htmlFor="jobTitle" className='mb-1 mt-0'>Job Title</label>
              <input
                id="jobTitle"
                type='text'
                placeholder='Frontend Developer'
                value={jobData.title}
                onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
                className=' py-2 rounded-lg px-2 border border-[#BCBCBC] focus:outline-none focus:border-black placeholder:text-[#BCBCBC]'
              />
            </div>

            {/* Company Name */}
            <div className='flex flex-col'>
              <label htmlFor="companyName" className='mb-1 mt-0'>Company Name</label>
              <input
                id="companyName"
                type='text'
                placeholder='Amazon, Microsoft, Swiggy'
                value={jobData.companyName}
                onChange={(e) => setJobData({ ...jobData, companyName: e.target.value })}
                className=' py-2 rounded-lg px-2 border border-[#BCBCBC] focus:outline-none focus:border-black placeholder:text-[#BCBCBC]'
              />
            </div>


            {/* Location */}
            <div className='flex flex-col'>
              <label htmlFor="location" className='mb-1 mt-0'>Preferred Location</label>
              <select
                id="location"
                value={jobData.location}
                onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
                className=' py-2 rounded-lg px-2 border border-[#BCBCBC] focus:outline-none focus:border-black '
              >
                <option value="" className='text-[#BCBCBC]'>Select Location</option>
                {locations.map((location, index) => (
                  <option className='' key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Job Type */}
            <div className='flex flex-col'>
              <label htmlFor="jobType" className='mb-1 mt-0'>Job Type</label>
              <select
                id="jobType"
                value={jobData.jobType}
                onChange={(e) => setJobData({ ...jobData, jobType: e.target.value })}
                className=' py-2 rounded-lg px-2 border border-[#BCBCBC] focus:outline-none focus:border-black'
              >
                <option value="" className='text-[#BCBCBC]'>Select Job Type</option>
                {jobTypes.map((type, index) => (
                  <option className='' key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>


            {/* Salary Min */}
            <div className="flex gap-4 col-span-2 mt-3">
              <div className='flex gap-4 w-full'>
                <div className='flex flex-col w-full'>
                  <label htmlFor="salaryMin" className='mb-1 mt-0'>Salary Min</label>
                  <input
                    id="salaryMin"
                    type="number"
                    placeholder="↓↑ ₹0"
                    value={jobData.salaryMin || ""}
                    onChange={(e) => setJobData({ ...jobData, salaryMin: Number(e.target.value) })}
                    className=' py-2 rounded-lg px-2 border border-[#BCBCBC] focus:outline-none focus:border-black w-full placeholder:text-[#BCBCBC]'
                  />
                </div>

                {/* Salary Max */}
                <div className='flex flex-col w-full'>
                  <label htmlFor="salaryMax" className='mb-1 mt-0'>Salary Max</label>
                  <input
                    id="salaryMax"
                    type="number"
                    placeholder="↓↑ ₹200000"
                    value={jobData.salaryMax || ""}
                    onChange={(e) => setJobData({ ...jobData, salaryMax: Number(e.target.value) })}
                    className=' py-2 rounded-lg px-2 border border-[#BCBCBC] focus:outline-none focus:border-black w-full placeholder:text-[#BCBCBC]'
                  />
                </div>
              </div>

              {/* Application Deadline */}
              <div className='flex gap-4 w-full'>
                <div className='flex flex-col w-full'>
                  <label htmlFor="deadline" className='mb-1 mt-0'>Application Deadline</label>
                  <input
                    id="deadline"
                    type="date"
                    value={jobData.applicationDeadline || ""}
                    onChange={(e) => setJobData({ ...jobData, applicationDeadline: e.target.value })}
                    className=' py-2 rounded-lg px-2 border border-[#BCBCBC] focus:outline-none focus:border-black w-full'
                  />
                </div>

                {/* Company Website */}
                <div className='flex flex-col w-full'>
                  <label htmlFor="companyWebsite" className='mb-1 mt-0'>Company Website</label>
                  <input
                    id="companyWebsite"
                    type="url"
                    placeholder="google.com"
                    value={jobData.companyWebsite}
                    onChange={(e) => setJobData({ ...jobData, companyWebsite: e.target.value })}
                    className='relative py-2 rounded-lg pl-16 border border-[#BCBCBC] focus:outline-none focus:border-black w-full'
                  />
                  <button className='translate-y-[29px]  border-r-[#BCBCBC] border border-l-0 border-t-0 border-b-0 drop-shadow-2xl pl-2 pr-1 py-2 absolute'>https://</button>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className='flex flex-col col-span-2 mt-3'>
              <label htmlFor="jobDescription" className='mb-1 mt-0'>Job Description</label>
              <textarea
                id="jobDescription"
                value={jobData.jobDescription}
                onChange={(e) => setJobData({ ...jobData, jobDescription: e.target.value })}
                placeholder="Please share a description to let the candidate know more about the job role"
                className=' py-2 rounded-lg px-2 border border-[#BCBCBC] focus:outline-none focus:border-black h-32'
              />
            </div>

            {/* Save Button */}
            <div className='flex justify-between col-span-2 mt-4'>
              <button className=' text-[#222222] border py-2 px-10 rounded-lg '>
                <div className='flex items-center gap-2'>
                  <span>Save Draft</span>
                  <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 7.5L5 11.5L1 7.5M9 1.5L5 5.5L1 1.5" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </button>

              {/* Publish Button */}
              <button onClick={handlePublish} className='bg-[#00AAFF] text-white py-2 px-10 rounded-lg hover:bg-blue-600'>
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
