import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { RepoEntity } from './repo.entity';

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(RepoEntity)
    private repoRepository: Repository<RepoEntity>,
    private connection: Connection,
  ) {}

  async findAll(): Promise<RepoEntity[]> {
    return await this.repoRepository.find();
  }
}
