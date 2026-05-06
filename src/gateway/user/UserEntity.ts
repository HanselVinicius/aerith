import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReportEntity } from '../@shared/ReportEntity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  declare id: string;
  @Column()
  declare name: string;
  @OneToMany(() => ReportEntity, (repport) => repport.user)
  declare repports: ReportEntity[];
}
