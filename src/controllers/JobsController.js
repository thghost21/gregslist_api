import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getJobs)
      .get('/search', this.getJobByQuery)
      .get('/:jobId', this.getJobById)
  }
  async getJobs(request, response, next) {
    try {
      const jobs = await jobsService.getJobs()
      response.send(jobs)
    } catch (error) {
      next(error)
    }
  }
  async getJobById(request, response, next) {
    try {
      const jobId = request.params.jobId
      const job = await jobsService.getJobById(jobId)
      response.send(job)
    } catch (error) {
      next(error)
    }
  }
  async getJobByQuery(request, response, next) {
    try {
      const jobQuery = request.query
      const jobs = await jobsService.getJobByQuery(jobQuery)
      response.send(jobs)
    } catch (error) {
      next(error)
    }
  }
}