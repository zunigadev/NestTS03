import {IsDateString, IsEmail, IsNotEmpty, IsString, Max } from "class-validator";

export class CreateUserDto {
    
    @IsEmail()
    @IsNotEmpty()
    mail: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    pass: string;

    @IsDateString()
    @IsNotEmpty()
    dateOfBirth: Date;

}