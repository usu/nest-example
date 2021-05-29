import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Camp } from '../../camps/entities/camp.entity';
import { Transform } from 'class-transformer';

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
  start?: Date;

  /**
   *  End date of the period
   */
  end?: Date;

  @ManyToOne(() => Camp, (camp) => camp.periods, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  camp: Camp;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
