import { Controller, Body, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return await this.productService.getProduct(id);
  }

  @Post()
  async createProduct(@Body() productDTO: CreateProductDto) {
    return await this.productService.createProduct(productDTO);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() productDTO: UpdateProductDto) {
    return await this.productService.updateProduct(id, productDTO);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}
