import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { AppResponse } from 'src/app.interface';
import { Entry } from 'src/schemas/entry.schema';

@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Post()
  async create(
    @Body() createEntryDto: CreateEntryDto,
  ): Promise<AppResponse<Entry>> {
    const entry = await this.entriesService.create(createEntryDto);

    return {
      success: true,
      data: entry,
    };
  }

  @Get()
  async findAll(): Promise<AppResponse<Entry[]>> {
    return {
      success: true,
      data: await this.entriesService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entriesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntryDto: UpdateEntryDto) {
    return this.entriesService.update(id, updateEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entriesService.remove(id);
  }
}
