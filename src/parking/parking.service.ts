import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParkingSpotDto } from './parkingspot.dto';
import { ParkingSpot } from './parkingspot.entity';

@Injectable()
export class ParkingService {
  constructor(
    @InjectRepository(ParkingSpot)
    private parkingSpotRepository: Repository<ParkingSpot>,
  ) {}

  // add sample data
  addSampleData(): void {
    for (let i = 0; i <= 10; i++) {
      const parkingSpot = new ParkingSpot();
      parkingSpot.isUsed = true;
      parkingSpot.latitude = i * 10;
      parkingSpot.longitude = i * 20;
      parkingSpot.locationName = 'Location ' + i;

      this.parkingSpotRepository.save(parkingSpot);
    }

    for (let i = 0; i <= 10; i++) {
      const parkingSpot = new ParkingSpot();
      parkingSpot.isUsed = false;
      parkingSpot.latitude = i * 10;
      parkingSpot.longitude = i * 20;
      parkingSpot.locationName = 'Location ' + i;

      this.parkingSpotRepository.save(parkingSpot);
    }
  }

  // retrieve all parking spots
  async findAll(): Promise<ParkingSpot[]> {
    return this.parkingSpotRepository.find();
  }

  // retrieve a parking spot by id
  async findById(id: number): Promise<ParkingSpot> {
    return this.parkingSpotRepository.findOneBy({ id });
  }

  // retrieve a parking spot by location name
  async findByLocationName(locationName: string): Promise<ParkingSpot[]> {
    return this.parkingSpotRepository.findBy({ locationName: locationName });
  }

  // retrieve a parking spot by avalability
  async findByAvalability(): Promise<ParkingSpot[]> {
    return this.parkingSpotRepository.findBy({ isUsed: true });
  }

  async changeAvabilityById(id: number): Promise<ParkingSpot> {
    return this.parkingSpotRepository.findOneBy({ id }).then((spot) => {
      spot.isUsed = !spot.isUsed;
      return this.parkingSpotRepository.save(spot);
    });
  }

  async deleteById(id: number): Promise<void> {
    console.log(`logged delete requiest for id: ${id}`);
  }

  async saveNewSpot(dataInputted: ParkingSpotDto): Promise<void> {
    console.log(`logged post request with data`);
    console.log(dataInputted);
  }
}
