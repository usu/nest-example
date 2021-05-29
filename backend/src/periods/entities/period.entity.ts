import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Period {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: true })
  description?: string;

  @Field()
  @Column('date')
  start: Date;

  @Field()
  @Column('date')
  end: Date;

  @Field()
  @CreateDateColumn()
  createTime: Date;

  @Field()
  @UpdateDateColumn()
  updateTime: Date;
}
