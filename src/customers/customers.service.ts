import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Customer } from '../generated/prisma/client';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(id: number): Promise<Customer> {
        const customer = await this.prisma.customer.findUnique({
            where: { id },
        });

        if(!customer) throw new NotFoundException(`Customer with id ${id} not found`);

        return customer;
    }

    findAll(): Promise<Customer[]> {
        return this.prisma.customer.findMany({
            orderBy: { id: 'asc' },
        });
    }

    create(dto: CreateCustomerDto): Promise<Customer> {
        return this.prisma.customer.create({
            data: dto,
        });
    }

    update(id: number, dto: UpdateCustomerDto): Promise<Customer> {
        return this.prisma.customer.update({
            where: { id },
            data: dto,
        });
    }
}
