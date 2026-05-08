import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ReportEntity } from '../@shared/ReportEntity';

export enum AuthProviderEntity {
  LOCAL = 'LOCAL',
  GOOGLE = 'GOOGLE',
}

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  declare id: string;

  @Column()
  declare name: string;

  @Column({
    unique: true,
  })
  declare email: string;

  @Column({
    default: false,
  })
  declare emailVerified: boolean;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  declare avatarUrl: string | null;

  @Column({
    type: 'enum',
    enum: AuthProviderEntity,
  })
  declare authProvider: AuthProviderEntity;

  @Column()
  declare authProviderId: string;

  @Column({
    type: 'varchar',
    nullable: true,
    select: false,
  })
  declare passwordHash: string | null;

  @Column({
    default: true,
  })
  declare active: boolean;

  @CreateDateColumn()
  declare createdAt: Date;

  @UpdateDateColumn()
  declare updatedAt: Date;

  @OneToMany(
    () => ReportEntity,
    (report) => report.user,
  )
  declare reports: ReportEntity[];
}
