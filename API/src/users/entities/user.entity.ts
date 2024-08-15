import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'name', nullable: false})
  name: string;

  @Column({name: 'email', nullable: false, unique: true})
  email: string;

  @Column({name: 'password'})
  password: string;
  
}

