import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateVideoDto {
  @IsOptional()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsNotEmpty()
  year?: string;

  @IsOptional()
  @IsString()
  location?: string;
}
