import { Injectable } from '@nestjs/common';
import winston from 'winston';
import { winstonLogger } from './winston-loki.instance';

@Injectable()
export class CommonLoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winstonLogger;
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  info(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, { trace });
  }

  warn(message: string) {
    this.logger.warn(message);
  }
}
