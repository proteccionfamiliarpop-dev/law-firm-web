import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { EnterpriseLogger } from '@/lib/logger';

export async function GET() {
  const startTime = Date.now();
  
  let leadStoreOk = false;
  try {
    const dbPath = path.join(process.cwd(), 'src', 'lib', 'leads_db.json');
    if (fs.existsSync(dbPath)) {
      leadStoreOk = true;
    }
  } catch (err) {
    EnterpriseLogger.warn('Health Check: Lead store check warning', { error: err });
  }

  const memory = process.memoryUsage();
  const latencyMs = Date.now() - startTime;

  const healthData = {
    status: 'healthy',
    version: '2026.1.0',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    latencyMs,
    checks: {
      leadStore: leadStoreOk ? 'ok' : 'degraded',
      systemMemory: {
        rssMb: Math.round(memory.rss / (1024 * 1024)),
        heapTotalMb: Math.round(memory.heapTotal / (1024 * 1024)),
        heapUsedMb: Math.round(memory.heapUsed / (1024 * 1024)),
      }
    },
    performanceBudgets: {
      maxLatencyMs: 250,
      status: latencyMs <= 250 ? 'PASS' : 'WARN'
    }
  };

  EnterpriseLogger.info('Health Check Endpoint Executed', { latencyMs });

  return NextResponse.json(healthData, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'X-Health-Check': 'PASS'
    }
  });
}
