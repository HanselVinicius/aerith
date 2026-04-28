import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/UserEntity';

@Entity()
export class ReportEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @ManyToOne(() => UserEntity, (user) => user.repports)
  user: UserEntity;
}
