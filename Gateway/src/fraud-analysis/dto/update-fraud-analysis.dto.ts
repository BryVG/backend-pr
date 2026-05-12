import { PartialType } from '@nestjs/mapped-types';
import { CreateFraudAnalysisDto } from './create-fraud-analysis.dto';

export class UpdateFraudAnalysisDto extends PartialType(CreateFraudAnalysisDto) {}
