import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery } from '@nestjs/swagger';

enum LettersEnum {
  A = 'a',
  B = 'b',
  C = 'c',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiQuery({
    name: 'letters',
    enum: LettersEnum,
    enumName: 'LettersEnum',
    isArray: true,
  })
  getHello(@Query('letters') letters: LettersEnum[]): string {
    console.log(letters);
    return this.appService.getHello();
  }
}
