import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class ParkingSpot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isUsed: boolean;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  currentUser: User;

  @Column()
  locationName: string;

  @Column()
  longitude: number;

  @Column()
  latitude: number;
}
