import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtPayload } from 'jsonwebtoken';
import { User } from 'src/api/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/api/user/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) protected userRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async login(loginDto: LoginDto) {
        const user = await this.userRepository.findOne({
            where: { email: loginDto.email },
        });

        if (!user) {
            throw new NotFoundException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(
            loginDto.password,
            user.password
        );

        if (!isPasswordValid) {
            throw new NotFoundException('Invalid credentials');
        }

        const payload: JwtPayload = { user };

        const token = this.jwtService.sign(payload, {
            secret: process.env.JWT_KEY,
            expiresIn: process.env.JWT_EXPIRES,
        });

        return token;
    }

    async register(registerDto: CreateUserDto) {
        const userExists = await this.userRepository.findOne({
            where: { email: registerDto.email },
        });

        if (userExists) {
            throw new ConflictException('User already exists');
        }

        const user = this.userRepository.create(registerDto);
        await this.userRepository.save(user);
        return user;
    }
}
