import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from './entities/user.entity'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { UserMockService } from './mock/user.mock'

@Module({
    imports: [TypeOrmModule.forFeature([Users])], // Enregistre l'entité User pour ce module
    controllers: [UserController], // Associe le contrôleur au module
    providers: [UserService, UserMockService], // Associe le service au module
    exports: [UserService], // Permet d'utiliser UserService ailleurs si nécessaire
})
export class UserModule {}
