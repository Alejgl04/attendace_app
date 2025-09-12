import { IsOptional, IsString } from 'class-validator';

export class CreateAttendaceDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: number;

  @IsString()
  address: string;
}
