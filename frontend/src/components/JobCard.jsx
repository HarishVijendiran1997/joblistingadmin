import React from 'react';
import { differenceInHours, differenceInMinutes } from "date-fns";
const JobCard = ({ job }) => {

    const salaryAverage = Math.round(job.salaryMin + job.salaryMax) / 2;
    const yearlySalaryLPA = `${(salaryAverage * 12 / 100000).toFixed().toLocaleString()} LPA`;

    
    const hoursAgo = differenceInHours(new Date(), new Date(job.createdAt));
    let timeAgo = '';
    if (hoursAgo < 1) {
        const minutesAgo = differenceInMinutes(new Date(), new Date(job.createdAt));
        timeAgo = `${minutesAgo}m ago`;
    } else {
        timeAgo = `${hoursAgo}h ago`;
    }


    return (
        <div className="bg-white p-4 rounded-lg shadow-lg drop-shadow-[#D3D3D326] max-w-[316px] max-h-[390px]">


            <div className="flex items-start justify-between mb-5">
                <div className='w-20 h-20 bg-gradient-to-b from-[#FEFEFD] to-[#F1F1F1] border border-white rounded-lg drop-shadow-md'>

                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden mx-auto my-2">
                        <img
                            src={`https://icons.duckduckgo.com/ip3/${job.companyWebsite}.ico`}
                            alt={`${job.company} Logo`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <h2 className="text-sm rounded-lg bg-[#B0D9FF] px-2.5 py-1.5">{timeAgo}</h2>
            </div>



            <h2 className="text-xl font-extrabold mb-4">{job.title}</h2>

            <div className='flex justify-between items-center mb-5 gap-1 pr-5 text-light'>
                <div className='flex items-center gap-1'>
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7 14.75C11.7 12.7618 9.28233 11.15 6.29999 11.15C3.31766 11.15 0.899994 12.7618 0.899994 14.75M15.3 12.05V9.35M15.3 9.35V6.65M15.3 9.35H12.6M15.3 9.35H18M6.29999 8.45C4.31177 8.45 2.69999 6.83822 2.69999 4.85C2.69999 2.86177 4.31177 1.25 6.29999 1.25C8.28822 1.25 9.89999 2.86177 9.89999 4.85C9.89999 6.83822 8.28822 8.45 6.29999 8.45Z" stroke="#5A5A5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className="text-[#5A5A5A]">1-3 yr Exp</span>
                </div>
                <div className='flex items-center gap-1'>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.76367 16.3408H3.49094M3.49094 16.3408H12.1273M3.49094 16.3408V4.42274C3.49094 3.45538 3.49094 2.97133 3.67921 2.60185C3.84481 2.27684 4.10885 2.0128 4.43386 1.8472C4.80334 1.65894 5.28739 1.65894 6.25475 1.65894H9.36384C10.3312 1.65894 10.8142 1.65894 11.1837 1.8472C11.5087 2.0128 11.7736 2.27684 11.9392 2.60185C12.1273 2.97097 12.1273 3.45443 12.1273 4.4199V9.43166M12.1273 16.3408H17.3091M12.1273 16.3408V9.43166M17.3091 16.3408H19.0364M17.3091 16.3408V9.43166C17.3091 8.62686 17.309 8.22465 17.1776 7.90723C17.0022 7.484 16.6663 7.14754 16.2431 6.97223C15.9257 6.84075 15.5228 6.84075 14.718 6.84075C13.9132 6.84075 13.5108 6.84075 13.1934 6.97223C12.7701 7.14754 12.4341 7.484 12.2588 7.90723C12.1273 8.22465 12.1273 8.62685 12.1273 9.43166M6.08185 7.70439H9.5364M6.08185 5.11348H9.5364" stroke="#5A5A5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#5A5A5A]">Onsite</span>
                </div>
                <div className='flex items-center gap-1'>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1728 10.0001L8.99096 15.4546L0.809143 10.0001M17.1728 13.6365L8.99096 19.091L0.809143 13.6365M17.1728 6.36373L8.99096 11.8183L0.809143 6.36373L8.99096 0.90918L17.1728 6.36373Z" stroke="#5A5A5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#5A5A5A]">{yearlySalaryLPA}</span>
                </div>
            </div>

            <div className="flex-grow mb-4">
                <ul className='list-disc pl-5 text-[#555555] mb-5 pr-2'>
                    {job.jobDescription?.split('.')
                        .filter(point => point.trim() !== '').map((point, index) => (<li key={index} className='text-sm whitespace-break-spaces'>{point.trim()}</li>))}
                    {!job.jobDescription && <li>No description available</li>}
                </ul>
            </div>

            <div>
                <button className='w-full h-auto overflow-auto px-3 py-2.5 text-md text-[#fff] rounded-lg bg-[#00AAFF] border border-[#00AAFF]'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobCard;
