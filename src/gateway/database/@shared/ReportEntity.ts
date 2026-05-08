import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserEntity } from '../user/UserEntity';

@Index(
  ['originId', 'originName'],
  { unique: true },
)
@Index(['user'])
@Entity("reports")
export class ReportEntity {
  @PrimaryGeneratedColumn('uuid')
  declare id: string;

  @Column()
  declare title: string;

  @Column('text')
  declare description: string;

  @Column()
  declare originId: string;

  @Column()
  declare originName: string;

  @Column('int')
  declare score: number;

  @Column('int')
  declare ups: number;

  @Column()
  declare isVideo: boolean;

  @Column()
  declare url: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  declare mediaType: string | null;

  @ManyToOne(
    () => UserEntity,
    (user) => user.reports,
  )
  declare user: UserEntity;
}
