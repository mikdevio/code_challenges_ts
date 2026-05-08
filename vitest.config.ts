import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // 1. Especificamos dónde buscar los archivos de test
    include: [
      'ts_katas/**/*.test.ts', 
      'js_katas/**/*.test.js'
    ],
    
    // 2. Entorno de ejecución (Node es ideal para Katas de lógica)
    environment: 'node',
    
    // 3. Soporte para globals (opcional, permite usar 'describe', 'it' sin importar)
    globals: true,

    // 4. Configuración de cobertura (si quisieras medir qué tanto pruebas)
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});