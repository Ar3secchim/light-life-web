import { Controller, Dependencies, Get } from '@nestjs/common';

@Controller()

export class AppController {
 
  @Get()
  getHello() {
    return "Hello World!"
  }
}
