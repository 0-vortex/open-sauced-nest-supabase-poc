import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Repo } from './repo.entity';

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private repoRepository: Repository<Repo>,
    private connection: Connection,
  ) {}

  async findAll(): Promise<Repo[]> {
    return await this.repoRepository.find({
      take: 10,
    });
  }
}
