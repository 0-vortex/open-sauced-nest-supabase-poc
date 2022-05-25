import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RepoEntity } from './repo.entity';
import { RepoService } from './repo.service';
import { RepoController } from './repo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RepoEntity])],
  controllers: [RepoController],
  providers: [RepoService],
  exports: [RepoService],
})
export class RepoModule {}
