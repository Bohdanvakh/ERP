import { IsNotEmpty, IsString, MaxLength } from "class-validator"

export class CreateWarehouseDto {
    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    code: string;

    @IsNotEmpty()
    @MaxLength(100)
    @IsString()
    name: string;

    @MaxLength(250)
    @IsString()
    description: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    phoneNumber: string;

    @IsString()
    email: string;
}