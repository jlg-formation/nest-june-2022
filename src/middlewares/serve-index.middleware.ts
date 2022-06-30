import { Injectable, NestMiddleware } from '@nestjs/common';
import { join } from 'path';
import * as serveIndex from 'serve-index';

@Injectable()
export class ServeIndexMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('middleware');
    serveIndex(join(__dirname, '../..', 'client'))(req, res, next);
  }
}
