import { IsBoolean, IsInt, IsNotEmpty, IsString, Max } from "class-validator";

export class CreateUserDto {

    //id: number;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    pass: string;

    @IsInt()
    @Max(200)
    @IsNotEmpty()
    age: number;

    @IsBoolean()
    isActive: boolean;
}