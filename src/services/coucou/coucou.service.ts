import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Injectable()
export class CoucouService extends AppService {
  override getHello(): string {
    return 'Coucou le monde !';
  }
}
