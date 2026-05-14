import { Injectable } from '@nestjs/common';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Injectable()
export class PurchaseOrdersService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(data: any) {
    return this.prisma.purchase-order.create({
      data
    })
  }

  findAll() {
    return this.prisma.purchase-order.findMany({
      include: {
        items: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.purchase-order.findUnique({
      where: { id },

      include: {
        items: true
      }
    })
  }

  update(id: number, data: any) {
    return this.prisma.purchase-order.update({
      where: { id },
      data
    })
  }

  remove(id: number) {
    return this.prisma.purchase-order.delete({
      where: { id }
    })
  }
}
