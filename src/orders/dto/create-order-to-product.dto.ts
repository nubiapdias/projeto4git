import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderToProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do produto sendo pedido',
    example: '54869dc9-4302-adcd-41298d718c8a',
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantidade de produtos',
    example: 1,
  })
  quantity: number;
}
