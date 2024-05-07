import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/index';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createUserDto:CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.usersService.findAll()
    }

    
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id', ParseIntPipe) id:number) {
        return this.usersService.findOne(id)
    }
    
    @Put(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() updateUserDto:UpdateUserDto) {
        return this.usersService.update(id, updateUserDto)
    }

    @Patch(':id')
    changeStatus(@Param('id', ParseIntPipe) id:number, @Body() updateUserDto:UpdateUserDto){
        return this.usersService.changeStatus(id,updateUserDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseIntPipe) id:number) {
        return this.usersService.remove(id)
    }
    
}
