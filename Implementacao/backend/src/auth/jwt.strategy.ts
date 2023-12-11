import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(protected configService: ConfigService) {
        super({
            secretOrKey: configService.get('JWT_KEY'),
            jwtFromRequest: JwtStrategy.cookieExtractor,
            ignoreExpiration: false,
        });
    }

    static cookieExtractor(req: Request) {
        let token = null;
        if (req && req.cookies) {
            token = req.cookies['jwt'];
        }
        return token;
    }
}
