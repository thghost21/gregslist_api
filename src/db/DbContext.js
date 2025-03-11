import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { CarSchema } from '../models/Car.js';
import { HouseSchema } from '../models/House.js';
import { JobSchema as JobSchema } from '../models/Jobs.js';
import { PetSchema } from '../models/Pet.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Cars = mongoose.model('Car', CarSchema)
  Houses = mongoose.model('House', HouseSchema)
  Jobs = mongoose.model('jobs', JobSchema)
  Pets = mongoose.model('pets', PetSchema)
}

export const dbContext = new DbContext()
