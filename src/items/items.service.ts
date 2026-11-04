import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Item } from 'src/generated/prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(id: number): Promise<Item> {
        const item = await this.prisma.item.findUnique({
            where: { id }
        });

        if (!item) throw new NotFoundException(`Item with id ${id} not found`);

        return item;
    }

    findAll(): Promise<Item[]> {
        return this.prisma.item.findMany({
            orderBy: { id: 'asc' },
        });
    }

    create(dto: CreateItemDto): Promise<Item> {
        return this.prisma.item.create({
            data: dto,
        });
    }

    update(id: number, dto: UpdateItemDto): Promise<Item> {
        return this.prisma.item.update({
            where: { id },
            data: dto,
        });
    }

    delete(id: number): Promise<Item> {
        return this.prisma.item.delete({
            where: { id },
        });
    }
}
