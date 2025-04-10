import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // 👈 Indique que cette classe est une entité gérée par TypeORM
export class Posts {
  @PrimaryGeneratedColumn() // 👈 Génère automatiquement un ID unique pour chaque utilisateur
  id: number;

  @Column({ nullable: false }) // 👈 Champ image, obligatoire.
  picture: string;

  @Column({ nullable: false }) // 👈 Champ description, oobligatoire
  description: string;

  @Column() // 👈 Champ pour la date du post
  timestamp: Date;

  @Column({ default: true }) // 👈 Par défaut, un post est actif
  isActive: boolean;
}
 