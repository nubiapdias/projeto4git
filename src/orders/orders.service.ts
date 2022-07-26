import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateOrderDto) {
    console.log(dto);
    const data: Prisma.OrderCreateInput = {
      table: {
        connect: {
          number: dto.tableNumber,
        },
      },
      user: {
        connect: {
          id: dto.userId,
        },
      },
      products: {
        createMany: {
          data: dto.products.map((element) => ({
            productId: element.productId,
            quantity: element.quantity,
          })),
        },
      },
    };

    return this.prisma.order.create({
      data,
      select: {
        id: true,
        table: {
          select: {
            number: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        products: {
          select: {
            quantity: true,
            product: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.order.findMany({
      select: {
        id: true,
        table: {
          select: {
            number: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        products: {
          select: {
            quantity: true,
            product: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      select: {
        id: true,
        table: {
          select: {
            number: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        products: {
          select: {
            quantity: true,
            product: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }
}
