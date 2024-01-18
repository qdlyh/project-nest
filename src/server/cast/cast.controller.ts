import { Controller, Get, Req } from '@nestjs/common';

@Controller('cast')
export class CastController {
  @Get()
  findAll(@Req() request: Request): String {
    return '123'
  }
}
