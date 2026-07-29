import { NextRequest, NextResponse } from 'next/server';
import { saveLeadPersistent, getAllLeads, LeadPayload } from '@/lib/leadsStore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, modality } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Campos obligatorios incompletos (nombre, email, teléfono)' },
        { status: 400 }
      );
    }

    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    const leadData: LeadPayload = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      service: service || 'divorcio-mutuo-acuerdo',
      modality: modality || 'presencial',
      date: body.date || '',
      time: body.time || '',
      notes: body.notes || '',
      utmSource: body.utmSource || '',
      utmMedium: body.utmMedium || '',
      utmCampaign: body.utmCampaign || '',
      ip,
      userAgent
    };

    const result = saveLeadPersistent(leadData);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Lead capturado y guardado exitosamente',
        leadId: result.lead.id,
        timestamp: result.lead.timestamp
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Error al persistir lead en almacenamiento' },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Error in API /api/leads:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor al procesar la solicitud' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const leads = getAllLeads();
  return NextResponse.json({ success: true, count: leads.length, leads });
}
