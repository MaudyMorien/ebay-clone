import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IsString, IsEmail, IsNumber, IsUrl } from 'class-validator'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export class Add extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  title: string

  @IsUrl()
  @Column('text')
  picture: string

  @IsNumber()
  @Column('integer')
  price: number

  @IsEmail()
  @Column('text')
  email: string

  @IsNumber()
  @Column('integer')
  phoneNumber: number
}
