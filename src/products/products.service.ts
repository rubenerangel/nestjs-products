import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { throws } from 'node:assert';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { IProduct } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('products') private readonly productModel: Model<IProduct>) {}

  async getProducts(): Promise<IProduct[]> {
    return await this.productModel.find();
  }

  async getProduct(id: string): Promise<IProduct> {
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new NotFoundException(`Don't find product ${id}`);
    }

    return product;
  }
  
  async createProduct(productDTO: CreateProductDto) {
    const product = await new this.productModel(productDTO);

    return await product.save();
  }

  
  async updateProduct(id: string, productDTO: UpdateProductDto) {
    const product = await this.productModel.findByIdAndUpdate(id, productDTO, {new: true});

    if (!product) {
      throw new NotFoundException(`Don't find product ${id}`);
    }

    return product;
  }

  
  async deleteProduct(id: string) {
    const product = await this.productModel.findByIdAndDelete(id);

    if (!product) {
      throw new NotFoundException(`Don't find product ${id}`);
    }

    return product;
  }
}
