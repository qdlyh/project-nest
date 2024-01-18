import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
import { CastController } from './server/cast/cast.controller';
import { CastModule } from './server/cast/cast.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/user'), UserModule, CastModule, PostsModule],
  controllers: [AppController, CastController],
  providers: [AppService],
})
export class AppModule {}
