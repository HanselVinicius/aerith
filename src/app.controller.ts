import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  healthCheck(): {
    status: string;
    isHealthy: boolean;
  } {
    return {
      status:
        'Every minute... every moment, matters and, True strength comes from our ability to forgive',
      isHealthy: true,
    };
  }
}
