import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @MinLength(5)
  @ApiProperty()
  title: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  @ApiProperty({ required: false })
  description?: string;

  @IsString()
  @ApiProperty()
  body: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  published?: boolean = false;
}
