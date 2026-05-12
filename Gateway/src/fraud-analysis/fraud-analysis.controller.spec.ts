import { Test, TestingModule } from '@nestjs/testing';
import { FraudAnalysisController } from './fraud-analysis.controller';
import { FraudAnalysisService } from './fraud-analysis.service';

describe('FraudAnalysisController', () => {
  let controller: FraudAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FraudAnalysisController],
      providers: [FraudAnalysisService],
    }).compile();

    controller = module.get<FraudAnalysisController>(FraudAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
