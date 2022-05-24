/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_API_KEY: string;
  readonly SUPABASE_JWT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
