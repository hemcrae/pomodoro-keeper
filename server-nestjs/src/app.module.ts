import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntriesModule } from './entries/entries.module';

@Module({
  imports: [
    EntriesModule,
    MongooseModule.forRoot(
      'mongodb+srv://pomodoro-keeper:ueWiW5tc801scbqj@cluster0.rafyt.mongodb.net/pomodoro-keeper?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
