/// <reference types="vite/client" />
import {TypeOrmModuleOptions} from "@nestjs/typeorm";

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_API_KEY: string;
  readonly SUPABASE_JWT_SECRET: string;

  readonly VITE_DB_PROTOCOL: TypeOrmModuleOptions;
  readonly VITE_DB_HOST: string;
  readonly VITE_DB_PORT: number;
  readonly VITE_DB_USERNAME: string;
  readonly VITE_DB_PASSWORD: string;
  readonly VITE_DB_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
