import { Test } from '@nestjs/testing';
import { VideoService } from './video.service';
import { Repository } from 'typeorm';
import { Video } from "./video.entity";

const mockVideoRepository = () => ({
  allVideos: jest.fn(),
});

describe('VideoService', () => {
  let videoService: VideoService;
  let videoRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        VideoService,
        { provide: Repository<Video>, useFactory: mockVideoRepository },
      ],
    }).compile();

    videoService = await module.get(VideoService);
    videoRepository = await module.get(Repository<Video>);
  });
  describe('allVideos', () => {
    it('VideoService.allVideos returns entire database', async () => {
      videoRepository.allVideos.mockResolvedValue({ 'videos' });
      const result = await videoService.allVideos();
      expect(result).toEqual('videos');
    });
  });
});
