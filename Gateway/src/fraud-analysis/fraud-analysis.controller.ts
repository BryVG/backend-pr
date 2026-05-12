import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FraudAnalysisService } from './fraud-analysis.service';
import { CreateFraudAnalysisDto } from './dto/create-fraud-analysis.dto';
import { UpdateFraudAnalysisDto } from './dto/update-fraud-analysis.dto';

@Controller('fraud-analysis')
export class FraudAnalysisController {
  constructor(private readonly fraudAnalysisService: FraudAnalysisService) {}

  @Post()
  create(@Body() createFraudAnalysisDto: CreateFraudAnalysisDto) {
    return this.fraudAnalysisService.create(createFraudAnalysisDto);
  }

  @Get()
  findAll() {
    return this.fraudAnalysisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fraudAnalysisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFraudAnalysisDto: UpdateFraudAnalysisDto) {
    return this.fraudAnalysisService.update(+id, updateFraudAnalysisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fraudAnalysisService.remove(+id);
  }
}
