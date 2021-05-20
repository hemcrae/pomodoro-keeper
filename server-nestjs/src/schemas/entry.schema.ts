import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EntryDocument = Entry & Document;

@Schema({
  timestamps: true,
})
export class Entry {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  startTime: Date;

  @Prop()
  endTime: Date;
}

export const EntrySchema = SchemaFactory.createForClass(Entry);

export interface IEntry {
  name: string;
  type: string;
  startTime: string;
  endTime: string;
}
