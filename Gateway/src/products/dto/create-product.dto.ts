import {
  IsString,
} from 'class-validator'

export class CreateProductDto {

  @IsString()
  name!: string
  @IsString()
  StandardUnit!: string

  @IsString()
  StandardMeasure!: string

}