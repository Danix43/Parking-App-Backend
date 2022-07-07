import { Module } from '@nestjs/common';
import { ParkingController } from './parking.controller';
import { ParkingService } from './parking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingSpot } from './parkingspot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingSpot])],
  controllers: [ParkingController],
  providers: [ParkingService],
})
export class ParkingModule {}
