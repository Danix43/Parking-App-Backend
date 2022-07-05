import { ParkingSpot } from './parkingspot.dto';
export interface User {
  name: string;
  balance: number;
  spotUsed: ParkingSpot;
}
