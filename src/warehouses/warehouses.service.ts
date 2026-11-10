import { Injectable, NotFoundException } from '@nestjs/common';
import { Warehouse } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WarehousesService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(id: number): Promise<Warehouse> {
        const wh = await this.prisma.warehouse.findUnique({
            where: { id }
        });

        if(!wh) throw new NotFoundException(`Warehouse with id ${id} not found`);

        return wh;
    }

    findAll(): Promise<Warehouse[]> {
        return this.prisma.warehouse.findMany({
            orderBy: { id: 'asc' },
        });
    }
}
