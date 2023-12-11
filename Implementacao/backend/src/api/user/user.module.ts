import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, UserRepository],
    controllers: [UserController],
    exports: [UserService, TypeOrmModule],
})
export class UserModule {}
