import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ParkingModule } from './parking/parking.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'danix1923',
      database: 'parkingapp',
      entities: ['./parking/entities/*.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ParkingModule,
    UserModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
