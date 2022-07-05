import { Injectable } from '@nestjs/common';
import { ParkingSpot } from './dtos/parkingspot.dto';

@Injectable()
export class ParkingService {
  private readonly parkingSpots: ParkingSpot[] = [];

  // retrieve all parking spots
  findAll(): ParkingSpot[] {
    return this.parkingSpots;
  }

  // retrieve a parking spot by id
  findById(id: number): ParkingSpot {
    return this.parkingSpots.find((spot) => spot.id === id);
  }

  // retrieve a parking spot by location name
  findByLocationName(locationName: string): ParkingSpot {
    return this.parkingSpots.find(
      (spot) => spot.location.name === locationName,
    );
  }

  // retrieve a parking spot by avalability
  findByAvalability(): ParkingSpot[] {
    return this.parkingSpots.filter((spot) => spot.isUsed);
  }
}
