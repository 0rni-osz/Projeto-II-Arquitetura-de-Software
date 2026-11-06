import { injectable } from "inversify";
import logger from '../lib/logger';
import { ValidationError } from '../domain/errors';
import { IPaymentMethod } from './IPaymentMethod';

@injectable()
export class PixPayment implements IPaymentMethod {
  readonly name = 'pix';

  async process(total: number, details: any): Promise<void> {
    if (!details?.pixKey) throw new ValidationError('Chave Pix ausente');

    logger.info(`Pix de R$ ${total} gerado para a chave ${details.pixKey}`);
  }
}