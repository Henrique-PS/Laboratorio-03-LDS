import { CanActivate, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
    constructor(private reflector: Reflector) {
        super();
    }

    handleRequest(err, user, info, context: ExecutionContextHost, status) {
        const isPublic = this.reflector.get<boolean>(
            'isPublic',
            context.getHandler()
        );

        if (info instanceof Error) {
            throw new UnauthorizedException(info.message);
        }

        if (info?.toString() === 'Error: No auth token' && isPublic)
            return undefined;
        return super.handleRequest(err, user, info, context, status);
    }
}
