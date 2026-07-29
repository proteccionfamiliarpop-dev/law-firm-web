export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'FATAL';

export interface LogPayload {
  message: string;
  level: LogLevel;
  context?: Record<string, unknown>;
  error?: Error | unknown;
  timestamp?: string;
}

export class EnterpriseLogger {
  private static formatError(err: unknown) {
    if (err instanceof Error) {
      return {
        name: err.name,
        message: err.message,
        stack: err.stack,
      };
    }
    return { message: String(err) };
  }

  public static log({ message, level, context = {}, error, timestamp }: LogPayload) {
    const formattedLog = {
      timestamp: timestamp || new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      level,
      message,
      context,
      error: error ? this.formatError(error) : undefined,
    };

    if (process.env.NODE_ENV === 'production') {
      console.log(JSON.stringify(formattedLog));
    } else {
      const color = level === 'ERROR' || level === 'FATAL' ? '[31m' : level === 'WARN' ? '[33m' : '[32m';
      console.log(`${color}[${formattedLog.level}][0m ${formattedLog.timestamp} - ${message}`, context);
    }
  }

  public static info(message: string, context?: Record<string, unknown>) {
    this.log({ message, level: 'INFO', context });
  }

  public static warn(message: string, context?: Record<string, unknown>) {
    this.log({ message, level: 'WARN', context });
  }

  public static error(message: string, error?: unknown, context?: Record<string, unknown>) {
    this.log({ message, level: 'ERROR', error, context });
  }
}
