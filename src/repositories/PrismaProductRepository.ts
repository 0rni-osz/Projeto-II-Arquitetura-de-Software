import { injectable } from "inversify";
import { PrismaClient } from '@prisma/client';
import { ProductData } from '../domain/IProduct';
import { IProductRepository } from './IProductRepository';

@injectable()
export class PrismaProductRepository implements IProductRepository {
  private prisma = new PrismaClient();

  findById(id: number): Promise<ProductData | null> {
    return this.prisma.product.findUnique({ where: { id } });
  }
}