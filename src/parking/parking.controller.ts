import { Controller, Get, Param } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { ParkingSpot } from './parkingspot.entity';

@Controller('api/v1/parking')
export class ParkingController {
  constructor(private readonly appService: ParkingService) {}

  @Get('sampleData')
  async sampleData(): Promise<string> {
    this.appService.addSampleData();
    return 'added sample data';
  }

  @Get('all')
  async findAll(): Promise<ParkingSpot[]> {
    return this.appService.findAll();
  }

  @Get('id/:id')
  async findById(@Param('id') id: number): Promise<ParkingSpot> {
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
