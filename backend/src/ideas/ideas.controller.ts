import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { Idea } from './schemas/idea.schema';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createIdeaDto: CreateIdeaDto): Promise<Idea> {
    return await this.ideasService.create(createIdeaDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Idea> {
    return await this.ideasService.findById(id);
  }
}
