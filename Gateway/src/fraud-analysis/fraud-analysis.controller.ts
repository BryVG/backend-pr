import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common'

import { FraudAnalysisService } from './fraud-analysis.service'
import { CreateFraudAnalysisDto } from './dto/create-fraud-analysis.dto'
import { UpdateFraudAnalysisDto } from './dto/update-fraud-analysis.dto'
@Controller('fraudanalysis')
export class FraudAnalysisController {

  constructor(
    private readonly fraudAnalysisService: FraudAnalysisService
  ) {}

  @Post()
  create(
    @Body() body: CreateFraudAnalysisDto
  ) {
    return this.fraudAnalysisService.create(body)
  }

  @Get()
  findAll() {
    return this.fraudAnalysisService.findAll()
  }

  @Get(':id')
  findOne(
    @Param('id') id: string
  ) {
    return this.fraudAnalysisService.findOne(Number(id))
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateFraudAnalysisDto
  ) {
    return this.fraudAnalysisService.update(
      Number(id),
      body
    )
  }

  @Delete(':id')
  remove(
    @Param('id') id: string
  ) {
    return this.fraudAnalysisService.remove(Number(id))
  }
}