import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { ParkingSpotDto } from './parkingspot.dto';
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

  @Delete('id/:id/delete')
  async deleteById(@Param('id') id: number): Promise<void> {
    return this.appService.deleteById(id);
  }

  @Post('save')
  async createNewSpot(@Body() spot: ParkingSpotDto): Promise<void> {
    return this.appService.saveNewSpot(spot);
  }
}
