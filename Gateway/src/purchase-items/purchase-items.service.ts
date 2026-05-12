import { Injectable } from '@nestjs/common';
import { CreatePurchaseItemDto } from './dto/create-purchase-item.dto';
import { UpdatePurchaseItemDto } from './dto/update-purchase-item.dto';

@Injectable()
export class PurchaseItemsService {
 constructor(
    private prisma: PrismaService
  ) {}

  create(data: any) {
    return this.prisma.purchase-item.create({
      data
    })
  }

  findAll() {
    return this.prisma.purchase-item.findMany({
      include: {
        items: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.purchase-item.findUnique({
      where: { id },

      include: {
        items: true
      }
    })
  }

  update(id: number, data: any) {
    return this.prisma.purchase-item.update({
      where: { id },
      data
    })
  }

  remove(id: number) {
    return this.prisma.purchase-item.delete({
      where: { id }
    })
  }
}

