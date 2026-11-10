import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';

@Controller('warehouses')
export class WarehousesController {
    constructor(private readonly warehouseService: WarehousesService) {}

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.warehouseService.findOne(id);
    }
}
