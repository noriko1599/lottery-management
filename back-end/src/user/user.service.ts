import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { genSalt, hash } from "bcrypt";
import { User } from './entities/user.entity';
import { SignInDTO } from './dtos/sign-in.dto';
import { compare } from "bcrypt";
import { SignOutDTO } from './dtos/sign-out.dto';

@Injectable()
export class UserService {
    async createAsAdmin(dto: CreateUserDTO) {
        console.log(`Create user as admin`)
        const role = User.adminRole
        const user = User.fromDTO(dto)
        user.role = role
        return User.userWithoutPassword(await user.save())
    }

    async createAsStaff(dto: CreateUserDTO) {
        console.log(`Create user as admin`)
        const role = User.staffRole
        const user = User.fromDTO(dto)
        user.role = role
        return User.userWithoutPassword(await user.save())
    }

    async signIn(dto: SignInDTO) {
        const { username, password } = dto
        const user = await User.findOne({ where: { username } })
        if (!await compare(password, user.password)) {
            throw new UnauthorizedException(`Username or Password does not matches.`)
        }
        if (user.isOnline) {
            throw new UnauthorizedException(`User is online can not sign in.`)
        }

        user.lastSignIn = Date.now().toString()
        user.isOnline = true
        return User.userWithoutPassword(await user.save())
    }

    async signOut(dto: SignOutDTO) {
        const user = await User.findOne(dto.user.id)
        if (!user) {
            throw new BadRequestException(`User does not exist.`)
        }
        user.isOnline = false
        return User.userWithoutPassword(await user.save())
    }
}
