import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Baiacu',
    description: 'Nome do usuário',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'baiacupeixes.com',
    description: 'Email do usuário',
  })
  email: string;

  ddd: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '1166666666',
    description: 'Telefone do Usuário',
  })

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'weak password',
  })
  @ApiProperty({
    example: '@Abc1234',
    description:
      'Senha do usuário deve conter mínimo de uma letra minúscula, uma maiuscula, um simbolo e um número.',
  })
  password: string;

}

