import { Module } from '@nestjs/common';
import { AttendaceService } from './attendace.service';
import { AttendaceController } from './attendace.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attendace, AttendaceSchema } from './entities/attendace.entity';

@Module({
  controllers: [AttendaceController],
  providers: [AttendaceService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Attendace.name,
        schema: AttendaceSchema,
      },
    ]),
  ],
})
export class AttendaceModule {}
