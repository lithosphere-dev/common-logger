import { Injectable } from '@nestjs/common';
import winston from 'winston';
import WinstonLoki from 'winston-loki'; 

@Injectable()
export class CommonLoggerService {
  private readonly lokiTransport: WinstonLoki;
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        (this.lokiTransport = new WinstonLoki({
          host: process.env.LOKI_URL || 'http://localhost:3100',
          labels: { job: process.env.LOGGER_APP_LABEL || 'unknown' },
        })),
      ],
    });
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
