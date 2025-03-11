import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class CarsService {
  async getAllCars() {
    const cars = await dbContext.Cars.find().populate('creator')
    return cars
  }
  async getCarById(carId) {
    const car = await dbContext.Cars.findById(carId).populate('creator')
    if (car == null) {
      throw new BadRequest(`${carId} is not a valid car id!`)
    }
    return car
  }
}

export const carsService = new CarsService()