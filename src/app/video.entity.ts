import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  year: string;
  @Column()
  location: string;
  @Column()
  director: string[];
  @Column()
  stars: string[];
}
