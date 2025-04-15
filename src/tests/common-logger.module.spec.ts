import { Test, TestingModule } from '@nestjs/testing';
import { CommonLoggerModule } from '../common-logger/common-logger.module';
import { CommonLoggerService } from '../common-logger/common-logger.service';

describe('CommonLoggerModule', () => {
  let moduleRef: TestingModule;
  let commonLoggerService: CommonLoggerService;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [CommonLoggerModule],
    }).compile();

    commonLoggerService = moduleRef.get<CommonLoggerService>(CommonLoggerService);
  });

  it('should be defined', () => {
    expect(commonLoggerService).toBeDefined();
  });

  it('should have a log method', () => {
    expect(typeof commonLoggerService.info).toBe('function');
  });
});
