import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDataSource } from './data-source/data-source';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Charge le fichier .env
    TypeOrmModule.forRoot(AppDataSource.options), // Utilisation de la configuration TypeORM à partir de datasource
    UserModule,
    TypeOrmModule.forFeature([UserModule]),
  ],

  controllers: [AppController], // Ajout du contrôleur principal
  providers: [AppService], // Ajout du service principal
})
export class AppModule {}
 