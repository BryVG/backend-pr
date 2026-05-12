import { Test, TestingModule } from '@nestjs/testing';
import { FraudAnalysisService } from './fraud-analysis.service';

describe('FraudAnalysisService', () => {
  let service: FraudAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FraudAnalysisService],
    }).compile();

    service = module.get<FraudAnalysisService>(FraudAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
