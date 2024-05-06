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
  create(createUserDto: CreateUserDto) {
    console.log('Usuario resgistrado exitosamente')
    return this.userRepository.save(createUserDto);
  }

  //Muestra todos los usuarios
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  //Muestra usuario por ID
  async findOne(id: number): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id })
    //Condicional de existencia de usuario
    if (!user) { 
      throw new HttpException(
        'Usuario inexistente',
        404,
      );
    }
    return user
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
