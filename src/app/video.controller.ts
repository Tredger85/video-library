import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete, Query
} from "@nestjs/common";
import { VideoService } from './video.service';
import { Video } from './video.entity';
import { CreateVideoDto } from '../dto/create-video.dto';
import { UpdateVideoDto } from '../dto/update-video.dto';
import { SearchVideoDto } from "../dto/search-video.dto";

@Controller()
export class VideoController {
  constructor(private appService: VideoService) {}

  @Post()
  createVideo(@Body() createVideoDto: CreateVideoDto): Promise<Video> {
    return this.appService.createVideo(createVideoDto);
  }

  @Get()
  searchVideo(@Body() searchVideoDto: SearchVideoDto): Promise<Video[]> {
    if (Object.keys(searchVideoDto).length) {
      return this.appService.searchVideos(searchVideoDto);
    } else {
      return this.appService.allVideos();
    };
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
