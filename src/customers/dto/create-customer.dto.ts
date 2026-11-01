import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCustomerDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    name: string;

    @IsString()
    @MaxLength(250)
    fullName: string;

    @IsString()
    @MaxLength(250)
    description: string;

    @IsString()
    @MaxLength(250)
    address: string;

    @IsString()
    @MaxLength(10)
    index: string;

    @IsString()
    @IsNotEmpty()
    registrationNumber: string;
}