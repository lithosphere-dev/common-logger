import { Module } from '@nestjs/common';
import { CommonLoggerService } from './common-logger.service';

@Module({
  providers: [CommonLoggerService],
  exports: [CommonLoggerService]
})
export class CommonLoggerModule {}
