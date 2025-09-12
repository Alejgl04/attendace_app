import { Module } from '@nestjs/common';
import { AttendaceModule } from './attendace/attendace.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AttendaceModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB, {
      autoIndex: true, // Ensu
    }),
  ],
})
export class AppModule {}
