import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Attendace extends Document {
  @Prop({
    index: true,
    required: true,
  })
  firstName: string;

  @Prop({
    index: true,
    required: true,
  })
  lastName: string;

  @Prop({
    index: true,
    default: 'N/A',
  })
  email?: string;

  @Prop({
    index: true,
  })
  phone?: string;

  @Prop({
    index: true,
  })
  address?: string;
}

export const AttendaceSchema = SchemaFactory.createForClass(Attendace);
