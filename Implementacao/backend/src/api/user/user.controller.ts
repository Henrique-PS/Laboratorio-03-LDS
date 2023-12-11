import { Body, Controller, Post } from '@nestjs/common';
import {
    ApiConflictResponse,
    ApiOkResponse,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('api/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    @ApiOkResponse({ description: 'User created' })
    @ApiConflictResponse({ description: 'User already exists' })
    @ApiParam({ name: 'createUserDto', type: CreateUserDto })
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }
}
