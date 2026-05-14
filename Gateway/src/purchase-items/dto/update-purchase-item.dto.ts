import {
  IsOptional,
  IsNumber
} from 'class-validator'

export class UpdatePurchaseItemDto {

  @IsOptional()
  @IsNumber()
  purchaseOrderId?: number

  @IsOptional()
  @IsNumber()
  productId?: number

  @IsOptional()
  @IsNumber()
  quantity?: number

  @IsOptional()
  @IsNumber()
  unitPrice?: number

  @IsOptional()
  @IsNumber()
  totalPrice?: number
}