import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SectionDocument = Section & Document;
export type IdeaDocument = Idea & Document;

@Schema({ timestamps: true })
export class Section {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  content!: string;
}

@Schema({ timestamps: true })
export class Idea {
  @Prop({ required: true })
  idea!: string;

  @Prop({ type: [Section], required: true })
  sections!: Section[];

  @Prop({ default: Date.now, index: true })
  createdAt!: Date;
}

export const SectionSchema = SchemaFactory.createForClass(Section);
export const IdeaSchema = SchemaFactory.createForClass(Idea);

// Create index on createdAt for efficient querying
IdeaSchema.index({ createdAt: -1 });
