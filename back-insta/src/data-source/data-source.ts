import { Users } from '../user/entities/user.entity'
import { Posts } from '../user/entities/post.entity'
import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config()
export const AppDataSource = new DataSource({
    logging: true,
    entities: [Users, Posts], // Liste des entités à gérer par TypeORM (ici, la table "users")
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    migrations: [],
    subscribers: [],
})
