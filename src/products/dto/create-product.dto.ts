import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Nombre del producto es obligatorio' })
  @IsString({ message: 'Nombre no válido' })
  name: string;

  @IsNotEmpty({ message: 'La imagen es obligatoria' })
  image: string;

  @IsNotEmpty({ message: 'El precio del producto es obligatorio' })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Precio no válido' })
  price: number;

  @IsNotEmpty({ message: 'La cantidad no puede ir vacia' })
  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'Cantidad no válida' })
  inventory: number;

  @IsNotEmpty({ message: 'La categoría es obligatoria' })
  @IsInt({ message: 'La categoria no es válida' })
  categoryId: number;
}
