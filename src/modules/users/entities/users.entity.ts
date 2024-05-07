import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', unique: true , nullable: false })
  mail: string;

  @Column({ type: 'varchar', nullable: false })
  firstName: string;

  @Column({ type: 'varchar', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  pass: string;

  @Column({ type: 'date', nullable: false })
  dateOfBirth: Date;

  @CreateDateColumn({ type: 'datetime' })
  creationDate: Date;

  @UpdateDateColumn({ type: 'datetime' })
  modificationDate: Date;

  @Column({ type: 'tinyint', default: true })
  isActive: boolean;
}
