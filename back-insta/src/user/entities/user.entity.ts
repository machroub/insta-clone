import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // 👈 Indique que cette classe est une entité gérée par TypeORM
export class Users {
  @PrimaryGeneratedColumn() // 👈 Génère automatiquement un ID unique pour chaque utilisateur
  id: number;

  @Column({ unique: true, nullable:false }) // 👈 Champ email, il doit être unique
  email: string;

  @Column({ unique: false }) // 👈 Champ pseudo, il doit être unique
  pseudo: string;

  @Column() // 👈 Champ pour stocker le mot de passe
  password: string;

  @Column({ default: false }) // 👈 Par défaut, un utilisateur n'est pas admin
  isAdmin: boolean;

  @Column({ default: true }) // 👈 Par défaut, un utilisateur est actif
  isActive: boolean;
}
 