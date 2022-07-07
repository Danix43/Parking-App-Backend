import { UserDto } from '../users/user.dto';

export class ParkingSpotDto {
  id: number;
  locationName: string;
  longitude: number;
  latitude: number;
  isUsed: boolean;
  currentUser: UserDto;
}
