import { User } from 'src/domain/User';

export interface FindUserByIdGateway {
  findUserById(userId: string): User;
}
