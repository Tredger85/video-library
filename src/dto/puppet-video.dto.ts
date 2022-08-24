import { IsOptional, IsString } from 'class-validator';

export class PuppetVideoDto {
  @IsOptional()
  @IsString()
  director?: string[];

  @IsOptional()
  @IsString()
  stars?: string[];
}
