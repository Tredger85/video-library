import { IsOptional, IsString } from 'class-validator';

export class SearchVideoDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  year?: string;

  @IsOptional()
  @IsString()
  location?: string;
}
