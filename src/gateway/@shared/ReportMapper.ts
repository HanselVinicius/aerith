import { Report } from 'src/domain/Report';
import { ReportEntity } from './ReportEntity';
import { UserEntity } from '../user/UserEntity';

export class ReportEntityMapper {
  static toEntity(repport: Report): ReportEntity {
    const repportEntity = new ReportEntity();
    repportEntity.description = repport.getDescription();
    repportEntity.id = repport.getId();
    repportEntity.title = repport.getTitle();
    repportEntity.user = { id: repport.getUserId() } as UserEntity;
    return repportEntity;
  }

  static toDomain(repportEntity: ReportEntity): Report {
    return Report.reCreate(
      repportEntity.id,
      repportEntity.title,
      repportEntity.description,
      repportEntity.user.id,
    );
  }
}
