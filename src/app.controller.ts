import { Controller, Get, Param } from '@nestjs/common';
import { ParkingService } from './app.service';
import { ParkingSpot } from './dtos/parkingspot.dto';

@Controller('api/v1/parking')
export class ParkingController {
  constructor(private readonly appService: ParkingService) {}

  @Get('all')
  async findAll(): Promise<ParkingSpot[]> {
    return this.appService.findAll();
  }

  @Get('id/:id')
  async findById(@Param('id') id: number):  Promise<ParkingSpot> {
    return this.appService.findById(id);
  }

  @Get('location/:location')
  async findByLocationName(
    @Param('location') location: string,
  ): Promise<ParkingSpot[]> {
    return this.appService.findByLocationName(location);
  }

  @Get('avalabile')
  async findByAvalability(): Promise<ParkingSpot[]> {
    return this.appService.findByAvalability();
  }
}
