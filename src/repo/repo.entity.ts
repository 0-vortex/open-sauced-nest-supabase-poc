import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'repos' })
export class Repo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  issues: number;

  @Column()
  stars: number;

  @Column()
  watchers: number;

  @Column()
  subscribers: number;

  @Column({ default: false })
  is_fork: boolean;

  @Column({ type: 'date' })
  created_at: string;

  @Column({ type: 'date' })
  updated_at: string;

  @Column({ type: 'date' })
  pushed_at: string;

  @Column({ type: 'date' })
  last_fetched_contributors_at: string;

  @Column()
  name: string;

  @Column()
  full_name: string;

  @Column()
  description: string;

  @Column()
  language: string;

  @Column()
  license: string;

  @Column()
  url: string;
}
