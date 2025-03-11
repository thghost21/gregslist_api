import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js"

class JobsService {
  async getJobs() {
    const jobs = await dbContext.Jobs.find()
    return jobs
  }
  async getJobById(jobId) {
    const job = await dbContext.Jobs.findById(jobId)
    if (job == null) {
      throw new BadRequest("Could not find a job with the id of " + jobId);
    } return job
  }
  async getJobByQuery(jobQuery) {
    const sortBy = jobQuery.sortBy
    delete jobQuery.sortBy
    const job = await dbContext.Jobs.find(jobQuery).sort(sortBy)
    return job
  }
}

export const jobsService = new JobsService()