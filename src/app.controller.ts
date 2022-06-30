import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('coucou')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('toto')
  getToto(): string {
    return 'coucou toto';
  }
}
