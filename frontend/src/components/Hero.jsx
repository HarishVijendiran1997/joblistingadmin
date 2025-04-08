import React, { useState, useEffect } from 'react';
import { fetchJobs } from '../services/api.js'
import JobCard from './JobCard';
import { useFilters } from '../contexts/FiltersContext';
import { useJobData } from '../contexts/JobDataContext';

const Hero = () => {
  //   const job = {
  //     title: 'Full Stack Developer',
  //     company: 'Tech Innovators Inc.',
  //     description: 'Join our team to build scalable and high-performance web applications using the latest technologies. We are looking for a skilled developer.',
  //     companyWebsite: "looklinks.com",
  //     salaryMin: 50000,
  //     salaryMax: 120000,
  //   };

  const { filters } = useFilters()
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { jobData } = useJobData()

  useEffect(() => {
    console.log(filters);
    const getJobs = async () => {
      try {
        const res = await fetchJobs(filters);
        setJobs(res.data);
        setError(false)
        setErrorMessage('')
      } catch (err) {
        setError(true)
        setErrorMessage(err?.response?.data?.message || "Error while fetching")
      }
    };

    if (jobData) {
      getJobs();
    }
  }, [filters, jobData]);


  return (
    <div className={`min-w-screen max-h-auto ${error ? "" : "px-16 py-8"} bg-[#D3D3D326] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}>
      {!error ? (
        jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))
      ) : (
        <div className={`w-screen ${error ? "min-h-[400px]" : "min-h-auto"} flex justify-center items-center`}>

          <span className='text-2xl text-[#686868]'>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Hero;
