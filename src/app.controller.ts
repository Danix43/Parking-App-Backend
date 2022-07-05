import { Controller, Get } from '@nestjs/common';
import { ParkingService } from './app.service';

@Controller('api/v1/parking')
export class ParkingController {
  constructor(private readonly appService: ParkingService) {}

  @Get('1')
  getHello(): string {
    return this.appService.getHello();
  }
}
