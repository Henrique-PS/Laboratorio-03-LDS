import { Body, Controller, Post, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Response } from 'express';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/api/user/dto/create-user.dto';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private configService: ConfigService
    ) {}

    @Post('login')
    @ApiOperation({ summary: 'Authenticate user' })
    @ApiOkResponse({ description: 'User authenticated' })
    @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
    async login(@Body() loginDto: LoginDto, @Res() res: Response) {
        const response = await this.authService.login(loginDto);

        res.cookie('auth_token', response, {
            sameSite: 'lax',
            path: '/',
            domain: this.configService.get('DOMAIN'),
            maxAge: 1000 * 60 * 60 * 24 * 1,
        });

        res.send({ message: 'User authenticated' });
    }

    @Post('register')
    @ApiOperation({ summary: 'Register user' })
    @ApiOkResponse({ description: 'User registered' })
    @ApiUnauthorizedResponse({ description: 'Invalid params' })
    async register(@Body() registerDto: CreateUserDto) {
        return await this.authService.register(registerDto);
    }
}
