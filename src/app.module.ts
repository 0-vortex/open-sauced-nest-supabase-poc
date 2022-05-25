import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepoModule } from './repo/repo.module';

import { Repo } from './repo/repo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: import.meta.env.VITE_DB_PROTOCOL,
      host: import.meta.env.VITE_DB_HOST,
      port: import.meta.env.VITE_DB_PORT,
      username: import.meta.env.VITE_DB_USERNAME,
      password: import.meta.env.VITE_DB_PASSWORD,
      database: import.meta.env.VITE_DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
      keepConnectionAlive: true,
      entities: [Repo],
    }),
    RepoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
