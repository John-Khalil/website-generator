import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateIdeaDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  idea!: string;
}
