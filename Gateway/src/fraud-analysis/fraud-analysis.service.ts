import { Injectable } from '@nestjs/common';
import { CreateFraudAnalysisDto } from './dto/create-fraud-analysis.dto';
import { UpdateFraudAnalysisDto } from './dto/update-fraud-analysis.dto';

@Injectable()
export class FraudAnalysisService {
 
   constructor(
    private prisma: PrismaService
  ) {}

  create(data: any) {
    return this.prisma.fraud_analysi.create({
      data
    })
  }

  findAll() {
    return this.prisma.fraud_analysi.findMany({
      include: {
        items: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.fraud_analysi.findUnique({
      where: { id },

      include: {
        items: true
      }
    })
  }

  update(id: number, data: any) {
    return this.prisma.fraud_analysi.update({
      where: { id },
      data
    })
  }

  remove(id: number) {
    return this.prisma.fraud_analysi.delete({
      where: { id }
    })
  }
}

