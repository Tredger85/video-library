import { Injectable, NotFoundException } from '@nestjs/common';
import { Video } from './video.entity';
import { CreateVideoDto } from '../dto/create-video.dto';
import { UpdateVideoDto } from '../dto/update-video.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) {}

  async createVideo(createVideoDto: CreateVideoDto): Promise<Video> {
    //scraping is logic added here and passed
    const { title, year, location } = createVideoDto;
    const video = this.videoRepository.create({
      title,
      year,
      location,
    });
    await this.videoRepository.save(video);
    return video;
  }

  async searchVideos(searchTerm: string): Promise<Video[]> {
    const query = this.videoRepository.createQueryBuilder('video');

    query.andWhere(
      '(LOWER(video.title) LIKE LOWER(:searchTerm))',
      // eslint-disable-next-line prettier/prettier
      { search: `%${searchTerm}%` },
    );

    return await query.getMany();
  }

  async getVideoById(id: string): Promise<Video> {
    const found = await this.videoRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  async updateVideo(
    id: string,
    updateVideoDto: UpdateVideoDto,
  ): Promise<Video> {
    const found: Video = await this.getVideoById(id);
    const { title, year, location } = updateVideoDto;

    if (found.title !== title) {
      found.title = title;
    }

    if (found.year !== year) {
      found.year = year;
    }

    if (found.location !== location) {
      found.location = location;
    }

    await this.videoRepository.save(found);
    return found;
  }

  async deleteVideo(id: string): Promise<void> {
    const result = await this.videoRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
}
