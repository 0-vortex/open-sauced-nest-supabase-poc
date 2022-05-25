import { Controller, Get } from '@nestjs/common';
import { RepoService } from './repo.service';
import type { RepoEntity } from './repo.entity';

@Controller('repo')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Get('/list')
  findUserList(): Promise<RepoEntity[]> {
    return this.repoService.findAll();
  }
}
