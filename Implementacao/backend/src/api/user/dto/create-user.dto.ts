import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsEnum } from 'class-validator';
import { RolesEnum } from '../enums/roles.enum';
import { IsEmail } from 'src/decorators/isEmail.decorator';
import { Exclude } from 'class-transformer';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    name: string;

    @ApiProperty()
    @IsString()
    @IsEmail({ message: 'Invalid email' })
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(11)
    cpf: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    rg: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(RolesEnum)
    role: RolesEnum;
}
