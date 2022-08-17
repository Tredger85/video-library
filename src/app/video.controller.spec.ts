import { Test, TestingModule } from '@nestjs/testing';
import { VideoController } from './app.controller';
import { VideoService } from './app.service';

describe('AppController', () => {
  let appController: VideoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VideoController],
      providers: [VideoService],
    }).compile();

    appController = app.get<VideoController>(VideoController);
  });
});
