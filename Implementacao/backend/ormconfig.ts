import { join } from 'path';

require('dotenv').config();

export const ormConfig = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    migrationsRun: true,
    retryAttempts: 5,
    retryDelay: 3000,
    autoLoadEntities: true,
    migrations: ['dist/db/migrations/**/*.{ts,js}'],
    entities: [join(__dirname, 'src/**', '*.entity.{ts,js}')],
    synchronize: true,
};
