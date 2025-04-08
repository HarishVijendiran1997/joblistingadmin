import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: String,
    companyName: String,
    location: String,
    jobType: String,
    salaryMin: Number,
    salaryMax: Number,
    applicationDeadline: Date,
    jobDescription: String,
    companyWebsite: String,
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
