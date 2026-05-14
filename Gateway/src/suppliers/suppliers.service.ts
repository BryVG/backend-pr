import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class SuppliersService {
  constructor(
    private prisma: PrismaService
  ) {}
  create(data: any) {
    return this.prisma.supplier.create({
      data
    })
  }

  findAll() {
    return this.prisma.supplier.findMany({
      include: {
        items: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.supplier.findUnique({
      where: { id },

      include: {
        items: true
      }
    })
  }

  update(id: number, data: any) {
    return this.prisma.supplier.update({
      where: { id },
      data
    })
  }

  remove(id: number) {
    return this.prisma.supplier.delete({
      where: { id }
    })
  }
}
