import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';
import { WarehousesModule } from './warehouses/warehouses.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    CustomersModule,
    ItemsModule,
    WarehousesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
