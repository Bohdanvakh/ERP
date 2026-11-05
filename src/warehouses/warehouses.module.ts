import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { WarehousesController } from './warehouses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [WarehousesService],
    controllers: [WarehousesController]
})
export class WarehousesModule {}
