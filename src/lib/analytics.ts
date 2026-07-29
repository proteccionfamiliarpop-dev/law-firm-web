declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Generic Event Sender
export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...params });
  }
};

// Conversion Event: Lead Form Submitted
export const trackFormSubmission = (leadData: { service: string; modality: string; utmSource?: string }) => {
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    event_label: leadData.service,
    modality: leadData.modality,
    utm_source: leadData.utmSource || 'direct'
  });
};

// Conversion Event: WhatsApp Click
export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: source
  });
};

// Conversion Event: Legal Calculator Use
export const trackCalculatorUse = (resultType: 'notarial' | 'judicial') => {
  trackEvent('legal_calculator_use', {
    event_category: 'Engagement',
    event_label: resultType
  });
};

// Engagement Event: Booking Funnel Step Progression
export const trackBookingStep = (stepNumber: number, stepName: string) => {
  trackEvent('booking_step_view', {
    event_category: 'Funnel',
    step_number: stepNumber,
    step_name: stepName
  });
};
