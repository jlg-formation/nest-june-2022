import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoucouService } from './services/coucou/coucou.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{ provide: AppService, useClass: CoucouService }],
})
export class AppModule {}
