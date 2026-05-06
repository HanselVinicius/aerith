import { User } from 'src/domain/user/User';

export interface FindUserByIdGateway {
  findUserById(userId: string): User;
}
