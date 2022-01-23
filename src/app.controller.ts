import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ path: "/", version: "v1" })
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }
}
