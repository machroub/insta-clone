import { Injectable, OnModuleInit } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Users } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users) private userRepository: Repository<Users>
    ) {}

    async create(createUserDto: CreateUserDto): Promise<Users> {
        const newUser = this.userRepository.create(createUserDto) // Création de l'entité User
        return await this.userRepository.save(newUser) // Sauvegarde en base de données
    }

    findAll() {
        return `This action retun all user`
    }

    async findOne(id: number) {
        const user = await this.userRepository.findOne({ where: { id } })
        return user
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    remove(id: number) {
        return `This action removes a #${id} user`
    }
}
