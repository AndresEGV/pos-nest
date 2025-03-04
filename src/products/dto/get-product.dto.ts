import { IsNumberString, IsOptional } from 'class-validator';
export class GetProductsQueryDto {
  @IsOptional()
  @IsNumberString({}, { message: 'La categoría debe ser número' })
  category_id: number;

  @IsOptional()
  @IsNumberString({}, { message: 'La cantidad debe ser número' })
  take: number;

  @IsOptional()
  @IsNumberString({}, { message: 'La cantidad debe ser número' })
  skip: number;
}
