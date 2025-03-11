import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js"

class HousesService {
  async getAllHouses() {
    const houses = await dbContext.Houses.find()
    return houses
  }
  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if (house == null) {
      throw new BadRequest(`${houseId} is not a valid car id!`);

    } return house
  }
  async getHouseQuery(houseQuery) {
    const sortBy = houseQuery.sortBy
    delete houseQuery.sortBy
    const houses = await dbContext.Houses.find(houseQuery).sort(sortBy)
    return houses

  }
}
export const housesService = new HousesService()