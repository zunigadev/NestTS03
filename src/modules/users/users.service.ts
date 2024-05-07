import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/index';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //Crea un nuevo usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userRepository.save(createUserDto);
    } catch (error) {
      throw new HttpException('Error al crear usuario', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Muestra todos los usuarios
  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new HttpException('Error al recuperar usuarios', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Muestra usuario por ID
  async findOne(id: number): Promise<User | null> {
    try {
      return await this.userRepository.findOneBy({id});
    } catch (error) {
      throw new HttpException('Error al recuperar usuario', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Actualizar usuario
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id })
    const userData = this.userRepository.merge(
      user,
      updateUserDto,
    );
    //Condicional de existencia de usuario
    if (!user) { 
      throw new HttpException(
        'Usuario inexistente',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.userRepository.save(userData);
  }

  //Eliminación Logica
  async changeStatus(id: number, updateUserDto: UpdateUserDto):Promise<User> {
    try{
      const user = await this.userRepository.findOneBy({ id })
      const userData = this.userRepository.merge(user,updateUserDto);
      return this.userRepository.save(userData);

    } catch (error) {
      throw new HttpException('Error al actualizar estado', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }


  //Eliminar usuario
  async remove(id: number): Promise<void> {
    const user = await this.userRepository.findOneBy({ id });
    //Condicional de existencia de usuario
    if (!user) { 
      throw new HttpException(
        'Usuario inexistente',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.userRepository.delete(id)
    console.log('User deleted')
  }
}
