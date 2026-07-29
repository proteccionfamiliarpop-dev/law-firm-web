import fs from 'fs';
import path from 'path';

export interface LeadPayload {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  modality: string;
  date?: string;
  time?: string;
  notes?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  timestamp?: string;
  ip?: string;
  userAgent?: string;
}

const LEADS_FILE_PATH = path.join(process.cwd(), 'src', 'lib', 'leads_db.json');

export function saveLeadPersistent(leadData: LeadPayload): { success: boolean; lead: LeadPayload } {
  const lead: LeadPayload = {
    ...leadData,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
  };

  try {
    let existingLeads: LeadPayload[] = [];
    if (fs.existsSync(LEADS_FILE_PATH)) {
      const fileContent = fs.readFileSync(LEADS_FILE_PATH, 'utf-8');
      try {
        existingLeads = JSON.parse(fileContent);
      } catch {
        existingLeads = [];
      }
    }

    existingLeads.push(lead);
    fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify(existingLeads, null, 2), 'utf-8');
    return { success: true, lead };
  } catch (error) {
    console.error('Error writing lead to persistent store:', error);
    return { success: false, lead };
  }
}

export function getAllLeads(): LeadPayload[] {
  try {
    if (fs.existsSync(LEADS_FILE_PATH)) {
      const content = fs.readFileSync(LEADS_FILE_PATH, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading leads:', error);
  }
  return [];
}
