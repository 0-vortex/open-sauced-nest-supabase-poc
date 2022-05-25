import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: import.meta.env.VITE_DB_PROTOCOL,
      host: import.meta.env.VITE_DB_HOST,
      port: import.meta.env.VITE_DB_PORT,
      username: import.meta.env.VITE_DB_USERNAME,
      password: import.meta.env.VITE_DB_PASSWORD,
      database: import.meta.env.VITE_DB_NAME,
      autoLoadEntities: false,
      synchronize: false,
      // entities: [
      //   new URL('/**/*.entity{.ts,.js}', import.meta.url).pathname,
      //   new URL('/**/*.view-entity{.ts,.js}', import.meta.url).pathname,
      // ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
