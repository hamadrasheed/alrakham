import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { models } from './entities';
import { authenticate } from './utils';

import { UserAuthModule, ProductModule } from './api';

import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { OrderModule } from './api/order/order.module';

dotenv.config({ path: '.env' });

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [ ...models ],
      logging: false,
    }),
    UserAuthModule,
    ProductModule,
    OrderModule,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cors(), authenticate)
      .exclude(
        { path: '/api/users/sign-in', method: RequestMethod.POST},
        { path: '/api/users/sign-up', method: RequestMethod.POST},
        { path: '/api/products', method: RequestMethod.GET},
      )
      .forRoutes({
        path: '*', method: RequestMethod.ALL
      });
  }
}

