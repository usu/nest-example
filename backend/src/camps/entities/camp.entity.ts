import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Period } from '../../periods/entities/period.entity';

@ObjectType()
@Entity()
export class Camp {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  name: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  motto?: string;

  @OneToMany(() => Period, (period) => period.camp)
  periods: Period[];

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
