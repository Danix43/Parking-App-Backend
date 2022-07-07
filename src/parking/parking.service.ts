import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ParkingSpot } from './parkingspot.entity';
import { ParkingSpotDto } from './parkingspot.dto';

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
  }

  // retrieve all parking spots
  findAll(): Promise<ParkingSpot[]> {
    return this.parkingSpotRepository.find();
  }

  // retrieve a parking spot by id
  findById(id: number): Promise<ParkingSpot> {
    return this.parkingSpotRepository.findOneBy({ id });
  }

  // retrieve a parking spot by location name
  findByLocationName(locationName: string): Promise<ParkingSpot[]> {
    return this.parkingSpotRepository.findBy({ locationName: locationName });
  }

  // retrieve a parking spot by avalability
  findByAvalability(): Promise<ParkingSpot[]> {
    return this.parkingSpotRepository.findBy({ isUsed: false });
  }

  changeAvabilityById(id: number): Promise<ParkingSpot> {
    return this.parkingSpotRepository.findOneBy({ id }).then((spot) => {
      spot.isUsed = !spot.isUsed;
      return this.parkingSpotRepository.save(spot);
    });
  }
}
