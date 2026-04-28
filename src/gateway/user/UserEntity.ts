import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReportEntity } from '../@shared/ReportEntity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @OneToMany(() => ReportEntity, (repport) => repport.user)
  repports: ReportEntity[];
}
