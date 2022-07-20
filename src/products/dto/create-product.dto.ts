import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl  } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do livro',
    example: 'O Canto Mais Escuro da Floresta',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Sinopse do livro',
    example:
      ' Hazel e seu irmão, Ben, moram em uma cidade onde humanos e fadas convivem...',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do livro',
    example: 21.99,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Link da capa do livro',
    example: 'https://lequeliterario.files.wordpress.com/2017/09/o2bcanto2bmais2bescuro2bda2bfloresta2bholly2bblack2beditora2bgalera.jpg',
  })
  image: string;

}
