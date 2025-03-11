import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // <-- Katalog z testami
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
});