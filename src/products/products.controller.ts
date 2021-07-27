import {
  Controller,Body,Get,Param,Post,Put,Delete, Res, HttpStatus} from '@nestjs/common';
import { Response } from 'express';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
  
  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getProducts(@Res() res:Response) {
    const products= await this.productService.getProducts();
    
    return res.status(HttpStatus.OK).json({
      message: 'Stored Products',
      products
    });
  }

  @Get(':id')
  async getProduct(
    @Param('id') id: string, 
    @Res() res: Response
  ) {
    const product = await this.productService.getProduct(id);
    return res.status(HttpStatus.OK).json({
      message: 'Stored Products',
      product
    });
  }

  @Post()
  async createProduct(
    @Body() productDTO: CreateProductDto,
    @Res() res: Response
  ) {
    const product = await this.productService.createProduct(productDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product Stored Successfully...',
      product
    });
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string, 
    @Body() productDTO: UpdateProductDto,
    @Res() res: Response
  ) {
    const product = await this.productService.updateProduct(id, productDTO);

    return res.status(HttpStatus.OK).json({
      message: 'Product Updated Successfully...',
      product
    });
  }

  @Delete(':id')
  async deleteProduct(
    @Param('id') id: string,
    @Res() res: Response
  ) {
    const product = await this.productService.deleteProduct(id);

    return res.status(HttpStatus.OK).json({
      message: 'Product Deleted Successfully...',
      product
    });
  }
}
