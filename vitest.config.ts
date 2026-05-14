import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // 1. Especificamos dónde buscar los archivos de test
    include: [
      'codewars_katas/**/*.test.ts',
      'codeforce_problems/**/*.test.ts',
      'leetcode_challenges/**/*.test.ts',
      'codewars_katas/**/*.test.js',
      'codeforce_problems/**/*.test.js',
      'leetcode_chanllenges/**/*.test.js',
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
