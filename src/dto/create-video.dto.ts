import { IsNotEmpty } from 'class-validator';

export class CreateVideoDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  year: string;

  @IsNotEmpty()
  location: string;
}
