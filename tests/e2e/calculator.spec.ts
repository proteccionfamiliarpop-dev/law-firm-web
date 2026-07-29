import { test, expect } from '@playwright/test';

test.describe('Flujo Crítico: Calculadora Legal (Notaría vs Juez)', () => {
  test('debe diagnosticar vía Notarial cuando existe mutuo acuerdo', async ({ page }) => {
    await page.goto('/');

    const calculator = page.locator('text=Calculadora de Orientación Legal');
    await expect(calculator).toBeVisible();

    // Pregunta 1: Mutuo acuerdo
    await page.click('button:has-text("Sí, ambos estamos de acuerdo")');

    // Pregunta 2: Hijos menores
    await page.click('button:has-text("Sí, tenemos hijos menores")');

    // Pregunta 3: Bienes a liquidar
    await page.click('button:has-text("No tenemos bienes")');

    // Verificar resultado
    await expect(page.locator('text=Trámite Notarial Express')).toBeVisible();
  });
});
