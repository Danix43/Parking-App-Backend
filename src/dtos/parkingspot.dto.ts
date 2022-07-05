import { Location } from './location.dto';
import { User } from './user.dto';

export interface ParkingSpot {
  id: number;
  location: Location;
  isUsed: boolean;
  currentUser: User;
}
