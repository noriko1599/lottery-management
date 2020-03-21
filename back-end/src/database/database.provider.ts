import { createConnection } from 'typeorm';
import { Member } from 'src/member/entities/member.entity';
import { Purchase } from 'src/purchase/entities/purchase.entity';
import { User } from 'src/user/entities/user.entity';
import { Period } from 'src/period/entities/period.entity';

export const DB_CONNECTION_TOKEN = `DB_CONNECTION_TOKEN`;

export const DatabaseProvider = [
    {
        provide: DB_CONNECTION_TOKEN,
        useFactory: async () => await createConnection({
            name: 'default',
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'admin',
            password: 'admin',
            database: 'lottery_management',
            entities: [
                Member,
                Purchase,
                User,
                Period,
            ]
            ,
            synchronize: true,
            // ssl: true,
            // dropSchema: true
            // logging: true,
        }),
    },
];
