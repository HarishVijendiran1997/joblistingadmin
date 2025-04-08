import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}/api`,
});

export const fetchJobs = (filters) => {
  return API.get("/jobs", {
    params: {
      ...filters,
    },
  });
};

export const createJob = (jobData) => {
  return API.post("/jobs", jobData);
};
