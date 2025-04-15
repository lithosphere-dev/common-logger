# CommonLoger

![CI](https://github.com/lithosphere-dev/common-logger/actions/workflows/ci.yml/badge.svg)

---

A simple and customizable logger for Nestjs applications. Supports multiple log levels, console and Loki transports, and is ideal for both development and production environments.

## Features

- ✅ Minimal setup  
- 📝 Log levels: `debug`, `info`, `warn`, `error`  
- 📦 Lightweight and efficient  
- 📡 Supports console and Loki output

## Getting Started

### Installation

```bash
npm install common-logger
```


### Import and Setup
Add variables in your envfile:
```bash
LOGGER_APP_LABEL=your_app_label
LOKI_URL=http://localhost:3100
```
Import the CommonLoggerModule in your module:
```typescript
import { CommonLoggerModule } from '@lithosphere-dev/common-logger';

@Module({
  imports: [CommonLoggerModule],
})
export class YourModule {}
```

### Inject and use the logger in your service:
```typescript
constructor(
  private readonly logger: CommonLoggerService,
) {}

this.logger.log(`Received message: ${message}`);
```

---

## License

MIT

## Dev config

Enable Git hooks for commit messages:
```bash
git config core.hooksPath .githooks
```
