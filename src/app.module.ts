import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeIndexMiddleware } from './middlewares/serve-index.middleware';
import { CoucouService } from './services/coucou/coucou.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [{ provide: AppService, useClass: CoucouService }],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ServeIndexMiddleware)
      .forRoutes({ path: '', method: RequestMethod.GET });
  }
}
