import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateAttendaceDto } from './dto/create-attendace.dto';
// import { UpdateAttendaceDto } from './dto/update-attendace.dto';
import { Attendace } from './entities/attendace.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AttendaceService {
  constructor(
    @InjectModel(Attendace.name)
    private readonly attendaceModel: Model<Attendace>,
  ) {}

  async create(createAttendaceDto: CreateAttendaceDto) {
    try {
      await this.attendaceModel.create(createAttendaceDto);
      return {
        ok: true,
        message: 'New attendace registered successfully',
      };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.attendaceModel.find().exec();
  }

  async findOneByEmail(email: string) {
    const emailDB = await this.attendaceModel.findOne({ email }).exec();
    if (emailDB) {
      throw new BadRequestException(
        `${emailDB.email} already exist in our records`,
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} attendace`;
  }

  // update(id: number, updateAttendaceDto: UpdateAttendaceDto) {
  //   return `This action updates a #${id} attendace`;
  // }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `This attendace already exists in our records ${JSON.stringify(
          error.keyValue,
        )}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(`Check Server logs`);
  }
}
