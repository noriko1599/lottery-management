import { AppBaseEntity } from "../../database/base-entity.entity";
import { PrimaryGeneratedColumn, Column, BeforeInsert, Entity } from "typeorm";
import { CreateUserDTO } from "../dtos/create-user.dto";
import { genSalt, hash } from "bcrypt";

@Entity()
export class User extends AppBaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ nullable: true })
    username: string

    @Column({ nullable: true })
    password: string

    @Column({ nullable: true })
    role: string

    @Column({ nullable: true, default: false })
    isOnline: boolean

    @Column({ nullable: true })
    lastSignIn: string

    @BeforeInsert()
    async hashPassword() {
        const saltRound = 10
        const password = await hash(this.password, saltRound)
        this.password = password
    }

    public static userWithoutPassword(user: User) {
        const { password, ...userWithouPassword } = user
        return userWithouPassword
    }

    public static fromDTO(dto: CreateUserDTO) {
        const { username, password } = dto
        const user = new User()
        user.username = username
        user.password = password
        return user
    }

    public static adminRole = `admin`
    public static staffRole = `staff`
}
