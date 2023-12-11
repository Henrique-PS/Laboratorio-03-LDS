import { InternalServerErrorException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    Generated,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { RolesEnum } from '../enums/roles.enum';

@Entity()
export class User extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ type: 'uuid', uniqueItems: true })
    @Column({ type: 'uuid', unique: true })
    @Generated('uuid')
    external_id: string;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column({ unique: true })
    email: string;

    @ApiProperty()
    @Column({ unique: true })
    cpf: string;

    @ApiProperty()
    @Column({ unique: true })
    rg: string;

    @ApiProperty()
    @Column()
    address: string;

    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty({
        enum: RolesEnum,
        default: RolesEnum.STUDENT,
        example: 'Student, Teacher',
    })
    @Column({ enum: RolesEnum, default: RolesEnum.STUDENT })
    role: RolesEnum;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (this.password) {
            try {
                this.password = await bcrypt.hash(this.password, 10);
            } catch (e) {
                throw new InternalServerErrorException(
                    'There are some wrong in the hash'
                );
            }
        }
    }
}
