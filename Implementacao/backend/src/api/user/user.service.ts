import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(createUserDto: CreateUserDto) {
        const verifyEmail = await this.userRepository.findByEmail(
            createUserDto.email
        );

        if (verifyEmail) throw new ConflictException('User already exists');

        const userObj = this.userRepository.create(createUserDto);

        const { external_id } = await this.userRepository.save(userObj);

        return { created_user_id: external_id };
    }
}
