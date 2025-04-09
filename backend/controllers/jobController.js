import Job from "../models/Job.js";

const createJob = async (req, res) => {
  const body = req.body;
  try {
    const job = await Job.create(body);
    res.status(201).json(job);
    console.log(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const filters = {};
    if (req.query.title) {
      filters.title = { $regex: req.query.title, $options: "i" };
    }
    if (req.query.location) {
      filters.location = { $regex: req.query.location, $options: "i" };
    }
    if (req.query.jobType) {
      filters.jobType = req.query.jobType;
    }
    if (req.query.salaryMin || req.query.salaryMax) {
      const min = parseInt(req.query.salaryMin) || 0;
      const max = parseInt(req.query.salaryMax) || Infinity;
      filters.salaryMin = { $gte: min };
      filters.salaryMax = { $lte: max };
    }

    const jobs = await Job.find(filters).sort({ createdAt: -1 });

    if (jobs.length === 0) {
      return res
        .status(404)
        .json({ message: "No jobs found matching your criteria" });
    }
    res.status(200).json(jobs);
    // console.log(jobs);
  } catch (error) {
    // console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Server error while fetching jobs" });
  }
};

export { createJob, getJobs };
