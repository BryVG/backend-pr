import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common'
import { CreateBuyerDto } from './dto/create-buyer.dto' 
import { UpdateBuyerDto } from './dto/update-buyer.dto' 
import { BuyersService } from './buyers.service'

@Controller('buyers')
export class BuyersController {

  constructor(
    private readonly buyersService: BuyersService
  ) {}

  @Post()
  create(
    @Body() body: CreateBuyerDto
  ) {
    return this.buyersService.create(body)
  }

  @Get()
  findAll() {
    return this.buyersService.findAll()
  }

  @Get(':id')
  findOne(
    @Param('id') id: string
  ) {
    return this.buyersService.findOne(Number(id))
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateBuyerDto
  ) {
    return this.buyersService.update(
      Number(id),
      body
    )
  }

  @Delete(':id')
  remove(
    @Param('id') id: string
  ) {
    return this.buyersService.remove(Number(id))
  }
}