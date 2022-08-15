import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Video } from './video.entity';
import { CreateVideoDto } from '../dto/create-video.dto';
import { UpdateVideoDto } from '../dto/update-video.dto';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('create')
  createVideo(@Body() createVideoDto: CreateVideoDto): Promise<Video> {
    return this.appService.createVideo(createVideoDto);
  }

  @Get('search')
  searchVideo(@Body() searchTerm: string) {
    return this.appService.searchVideos(searchTerm);
  }

  @Patch('/:id')
  updateVideo(
    @Param('id') id: string,
    @Body() updateVideoDto: UpdateVideoDto,
  ): Promise<Video> {
    return this.appService.updateVideo(id, updateVideoDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.appService.deleteVideo(id);
  }
}
