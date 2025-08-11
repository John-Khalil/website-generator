import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Idea, IdeaDocument } from './schemas/idea.schema';
import { CreateIdeaDto } from './dto/create-idea.dto';

@Injectable()
export class IdeasService {
  constructor(@InjectModel(Idea.name) private ideaModel: Model<IdeaDocument>) {}

  async create(createIdeaDto: CreateIdeaDto): Promise<Idea> {
    // Generate dummy sections based on the idea
    const sections = this.generateSections(createIdeaDto.idea);

    const createdIdea = new this.ideaModel({
      idea: createIdeaDto.idea,
      sections,
    });

    return await createdIdea.save();
  }

  async findById(id: string): Promise<Idea> {
    const idea = await this.ideaModel.findById(id).exec();
    if (!idea) {
      throw new NotFoundException(`Idea with ID ${id} not found`);
    }
    return idea;
  }

  private generateSections(
    idea: string
  ): Array<{ title: string; content: string }> {
    // This is a simplified section generator
    // In a real AI implementation, this would call an AI service
    const sections = [
      {
        title: 'Hero Section',
        content: `Welcome to our amazing website! Based on your idea: "${idea}". This hero section captures the essence of your vision and draws visitors in with compelling messaging and a clear call-to-action.`,
      },
      {
        title: 'About Section',
        content: `Learn more about what makes us special. We've crafted this section to showcase the unique value proposition that aligns with your website idea: "${idea}". Discover our story, mission, and what sets us apart from the competition.`,
      },
      {
        title: 'Contact Section',
        content: `Ready to get started? Reach out to us today! Whether you have questions about "${idea}" or want to discuss your project, we're here to help. Fill out the form below or use our contact information to get in touch.`,
      },
    ];

    return sections;
  }
}
