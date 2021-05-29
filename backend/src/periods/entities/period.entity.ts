import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Period {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  description?: string;

  /**
   * Start date of the period
   */
  @Column('date')
  start: Date;

  /**
   *  End date of the period
   */
  @Column('date')
  end: Date;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
