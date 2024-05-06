import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/index';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService) {}

    @Post()
    create(@Body() createUserDto:CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.usersService.findAll()
    }

    
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number) {
        return this.usersService.findOne(id)
    }
    
    @Put(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() updateUserDto:UpdateUserDto) {
        return this.usersService.update(id, updateUserDto)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id:number) {
        return this.usersService.remove(id)
    }
    
}
