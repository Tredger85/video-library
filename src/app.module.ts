import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoModule } from './app/video.module';

@Module({
  imports: [
    VideoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'video-library',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
