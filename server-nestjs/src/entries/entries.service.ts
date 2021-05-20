import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Entry, EntryDocument } from 'src/schemas/entry.schema';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';

@Injectable()
export class EntriesService {
  private entries: Entry[] = [];

  constructor(
    @InjectModel(Entry.name) private entryModel: Model<EntryDocument>,
  ) {}

  async create(createEntryDto: CreateEntryDto): Promise<Entry> {
    const createdEntry = new this.entryModel(createEntryDto);
    return createdEntry.save();
  }

  async findAll() {
    return this.entryModel.find({});
  }

  findOne(id: string) {
    return `This action returns a #${id} entry`;
  }

  update(id: string, updateEntryDto: UpdateEntryDto) {
    const updatedEntry = new this.entryModel(updateEntryDto);
    return updatedEntry.save();
  }

  remove(id: string) {
    return `This action removes a #${id} entry`;
  }
}
