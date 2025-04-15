import winston from 'winston';
import LokiTransport from 'winston-loki';

const lokiTransport = new LokiTransport({
  host: process.env.LOKI_URL || 'http://localhost:3100',
  labels: { app: process.env.LOGGER_APP_LABEL },
  json: true,
});

export const winstonLogger: winston.Logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
    lokiTransport,
  ],
});
