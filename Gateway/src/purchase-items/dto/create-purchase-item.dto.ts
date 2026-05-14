import {
  IsNumber
} from 'class-validator'

export class CreatePurchaseItemDto {

  @IsNumber()
  purchaseOrderId!: number

  @IsNumber()
  productId!: number

  @IsNumber()
  quantity!: number

  @IsNumber()
  unitPrice!: number

  @IsNumber()
  totalPrice!: number
}