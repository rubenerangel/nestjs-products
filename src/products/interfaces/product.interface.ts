import { Document } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  title: string;
  price: number;
  createAt?: Date;
}