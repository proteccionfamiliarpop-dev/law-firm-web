import { test, expect } from '@playwright/test';

test.describe('Flujo Crítico: Agendamiento de Cita Privada & Lead Capture', () => {
  test('debe permitir completar los 3 pasos del formulario de reserva', async ({ page }) => {
    await page.goto('/');

    // Verificar presencia del contenedor de agendamiento
    const bookingSection = page.locator('#agendar');
    await expect(bookingSection).toBeVisible();

    // Paso 1: Selección de modalidad
    await page.click('button:has-text("Modalidad Virtual")');
    await page.click('button:has-text("Siguiente Paso")');

    // Paso 2: Selección de fecha y hora
    await page.click('button:has-text("09:30 AM")');
    await page.click('button:has-text("Continuar a Datos de Contacto")');

    // Paso 3: Diligenciamiento de datos de contacto
    await page.fill('input[placeholder*="Nombre"]', 'Cliente Prueba E2E');
    await page.fill('input[placeholder*="correo"]', 'prueba.e2e@proteccionfamiliar.co');
    await page.fill('input[placeholder*="WhatsApp"]', '3153540285');

    // Casilla de Habeas Data Ley 1581
    await page.check('input[type="checkbox"]');

    // Confirmación
    await page.click('button:has-text("Confirmar Cita Privada")');
  });
});
