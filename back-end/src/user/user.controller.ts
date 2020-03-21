import { Controller, Post, Body, Patch, Req, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { SignInDTO } from './dtos/sign-in.dto';
import { Request } from 'express';
import { SignOutDTO } from './dtos/sign-out.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post(`admin`)
    async createAsAdmin(@Body() body: CreateUserDTO, @Req() req: Request) {
        const secret = req.headers[`secret`]
        if (secret !== `secret`) {
            throw new UnauthorizedException()
        }
        return await this.userService.createAsAdmin(body)
    }

    @Post(`staff`)
    async createAsStaff(@Body() body: CreateUserDTO, @Req() req: Request) {
        const secret = req.headers[`secret`]
        if (secret !== `secret`) {
            throw new UnauthorizedException()
        }
        return await this.userService.createAsStaff(body)
    }

    @Patch()
    async signIn(@Body() body: SignInDTO) {
        return await this.userService.signIn(body)
    }

    @Patch()
    async signOut(@Body() body: SignOutDTO) {
        return await this.userService.signOut(body)
    }
}
