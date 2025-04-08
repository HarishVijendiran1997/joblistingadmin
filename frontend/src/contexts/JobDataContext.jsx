import React, { createContext, useState, useContext } from 'react';

const JobDataContext = createContext();

export const JobDataProvider = ({ children }) => {
    const [jobData, setJobData] = useState({
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

    return (
        <JobDataContext.Provider value={{ jobData, setJobData }}>
            {children}
        </JobDataContext.Provider>
    );
};

export const useJobData = () => useContext(JobDataContext);