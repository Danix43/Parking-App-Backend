import { UserDto } from '../users/user.dto';

export class ParkingSpotDto {
  locationName: string;
  longitude: number;
  latitude: number;
  isUsed: boolean;
  // currentUser: UserDto;
}
