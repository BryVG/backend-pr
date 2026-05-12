import { Module } from '@nestjs/common';
import { FraudAnalysisService } from './fraud-analysis.service';
import { FraudAnalysisController } from './fraud-analysis.controller';

@Module({
  controllers: [FraudAnalysisController],
  providers: [FraudAnalysisService],
})
export class FraudAnalysisModule {}
