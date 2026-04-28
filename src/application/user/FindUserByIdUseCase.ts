import { User } from 'src/domain/User';
import { FindUserByIdDto } from './dto/FindUserDto';
import { FindUserByIdGateway } from './gateway/FindUserByIdGateway';

export class FindUserByIdUseCase {
  constructor(private readonly findUserByIdGateway: FindUserByIdGateway) {}

  async execute(findUserByIdDto: FindUserByIdDto): Promise<User> {
    return this.findUserByIdGateway.findUserById(findUserByIdDto.id);
  }
}
