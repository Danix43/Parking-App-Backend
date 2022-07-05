import { Module } from '@nestjs/common';
import { ParkingController } from './app.controller';
import { ParkingService } from './app.service';

@Module({
  imports: [],
  controllers: [ParkingController],
  providers: [ParkingService],
})
export class AppModule {}
