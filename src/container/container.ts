import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

import { OrderController } from "../controllers/OrderController";
import { OrderService } from "../services/OrderService";
import { NotificationService } from "../services/NotificationService";

import { IOrderRepository } from "../repositories/IOrderRepository";
import { PrismaOrderRepository } from "../repositories/PrismaOrderRepository";
import { IProductRepository } from "../repositories/IProductRepository";
import { PrismaProductRepository } from "../repositories/PrismaProductRepository";

import { IMailProvider } from "../providers/IMailProvider";
import { EtherealMailProvider } from "../providers/EtherealMailProvider";

import { PaymentMethodRegistry } from "../payments/PaymentMethodRegistry";
import { IPaymentMethod } from "../payments/IPaymentMethod";
import { CreditCardPayment } from "../payments/CreditCardPayment";
import { DebitCardPayment } from "../payments/DebitCardPayment";
import { PixPayment } from "../payments/PixPayment";

export const container = new Container();

container.bind<OrderController>(OrderController).toSelf();
container.bind<OrderService>(TYPES.OrderService).to(OrderService);
container.bind<NotificationService>(TYPES.NotificationService).to(NotificationService);
container.bind<PaymentMethodRegistry>(TYPES.PaymentMethodRegistry).to(PaymentMethodRegistry);

container.bind<IOrderRepository>(TYPES.OrderRepository).to(PrismaOrderRepository).inSingletonScope();
container.bind<IProductRepository>(TYPES.ProductRepository).to(PrismaProductRepository).inSingletonScope();

container.bind<IMailProvider>(TYPES.MailProvider).to(EtherealMailProvider).inSingletonScope();

container.bind<IPaymentMethod>(TYPES.PaymentMethod).to(CreditCardPayment);
container.bind<IPaymentMethod>(TYPES.PaymentMethod).to(DebitCardPayment);
container.bind<IPaymentMethod>(TYPES.PaymentMethod).to(PixPayment);