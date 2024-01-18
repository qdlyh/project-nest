import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('list')
  postHello(): any {
    return {
      code: 200,
      data: [
        {
          id: 1,
          name: '哦哦'
        }
      ],
      msg: '请求成功'
    }
  }

  @Get('user_*')
  getUser(): any {
    { return "getUser" }
  }

  @Put("list/:id")
  update() { return "update" }
}
