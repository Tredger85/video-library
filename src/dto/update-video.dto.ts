import { IsOptional, IsString } from 'class-validator';

export class UpdateVideoDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  year?: string;

  @IsOptional()
  @IsString()
  location?: string;
}
