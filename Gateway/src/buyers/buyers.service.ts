import { Injectable } from '@nestjs/common';
import {PrismaService} from '../prisma/PrismaService'

@Injectable()
export class BuyersService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(data: any) {
    return this.prisma.buyer.create({
      data
    })
  }

  findAll() {
    return this.prisma.buyer.findMany({
      include: {
     orders: true
}
    })
  }

  findOne(id: number) {
    return this.prisma.buyer.findUnique({
      where: { id },

      include: {
        items: true
      }
    })
  }

  update(id: number, data: any) {
    return this.prisma.buyer.update({
      where: { id },
      data
    })
  }

  remove(id: number) {
    return this.prisma.buyer.delete({
      where: { id }
    })
  }
}
