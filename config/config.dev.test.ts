// config.dev.test.ts
import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    "process.env.UMI_ENV": process.env.UMI_ENV, 
    "process.env.API_BASE_URL": 'http://xxx.test/api',
  },
});
