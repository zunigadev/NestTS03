import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entities/users.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [User],
  synchronize: true, //Realiza actualizaciones automaticas - Desactivar en producción
};
