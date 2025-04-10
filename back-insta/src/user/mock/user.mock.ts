import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';
import { faker } from '@faker-js/faker';
@Injectable()
export class UserMockService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  // Cette méthode insère des données mock dans la base de données
  async seed() {
    const customUsers = [
      { pseudo: 'Mach', password: 'awkward', email: 'Mach@example.com' },
      {
        pseudo: 'Priscillia',
        password: 'enzoleane83.',
        email: 'Priscillia@example.com',
      },
      { pseudo: 'Dane', password: 'pma auto', email: 'Dane@example.com' },
    ];
    const fakesUsers: { pseudo: string; email: string; password: string }[] =
      [];
    for (let i = 0; i < 5; i++) {
      fakesUsers.push({
        email: faker.internet.email(),
        pseudo: faker.internet.username(),
        password: faker.internet.password(),
      });
    }
    // Ajoute les utilisateurs dans la base de données
    for (const user of customUsers) {
      const existingUser = await this.userRepository.findOne({
        where: { email: user.email },
      });
      if (!existingUser) {
        const newUser = this.userRepository.create(user); // Crée l'utilisateur
        await this.userRepository.save(newUser); // Sauvegarde en base
      }
    }
    for (const user of fakesUsers) {
      const existingUser = await this.userRepository.findOne({
        where: { email: user.email },
      });

      if (!existingUser) {
        const newUser = this.userRepository.create(user); // Crée l'utilisateur
        await this.userRepository.save(newUser); // Sauvegarde en base
      }
    }
  }
  async onModuleInit() {
    await this.seed(); // Appel de la méthode seed pour insérer les utilisateurs mock
    console.log('les données ont bien été inserées');
  }
}
