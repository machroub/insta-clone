import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from '../entities/post.entity';
import { faker } from '@faker-js/faker';
@Injectable()
export class PostMockService {
  constructor(
    @InjectRepository(Posts) private postRepository: Repository<Posts>,
  ) {}

  // Cette méthode insère des données mock dans la base de données
  async seed() {
    //un premier tableau pour ajouter des custom user
    const customPosts = [
      { pseudo: 'Mach', password: 'awkward', email: 'Mach@example.com' },
      {
        pseudo: 'Priscillia',
        password: 'enzoleane83.',
        email: 'Priscillia@example.com',
      },
      { pseudo: 'Dane', password: 'pma auto', email: 'Dane@example.com' },
    ];
    //un second tableau pour ionserer des donnees aleatoir depuis une api - peut etre ajouter une couche d'abstraction pour pouvoir chnager d'api
    const fakesPosts: { pseudo: string; email: string; password: string }[] =
      [];
    for (let i = 0; i < 5; i++) {
      fakesPosts.push({
        email: faker.internet.email(),
        pseudo: faker.internet.username(),
        password: faker.internet.password(),
      });
    }
    // Ajoute les utilisateurs dans la base de données
    for (const post of customPosts) {
      const existingPost = await this.postRepository.findOne({
        where: { picture: post.pseudo },
      });
      if (!existingPost) {
        const newUser = this.postRepository.create(post); // Crée l'utilisateur
        await this.postRepository.save(newUser); // Sauvegarde en base
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
