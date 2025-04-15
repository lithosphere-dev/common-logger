import { Test, TestingModule } from '@nestjs/testing';
import { CommonLoggerService } from '../common-logger/common-logger.service';

describe('CommonLoggerService', () => {
  let service: CommonLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonLoggerService],
    }).compile();

    service = module.get<CommonLoggerService>(CommonLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should log debug messages', () => {
    const spy = jest.spyOn(console, 'debug').mockImplementation(() => {});
    service.debug('debug message');
    spy.mockRestore(); // optional, to clean up
  });

  it('should log info messages', () => {
    const spy = jest.spyOn(console, 'info').mockImplementation(() => {});
    service.info('info message');
    spy.mockRestore();
  });

  it('should log warn messages', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    service.warn('warn message');
    spy.mockRestore();
  });

  it('should log error messages with trace', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    service.error('error message', 'stack trace');
    spy.mockRestore();
  });
});
