import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { SupabaseAuthStrategy } from 'nestjs-supabase-auth';

@Injectable()
export class SupabaseStrategy extends PassportStrategy(
  SupabaseAuthStrategy,
  'supabase',
) {
  public constructor() {
    super({
      supabaseUrl: import.meta.env.SUPABASE_URL,
      supabaseKey: import.meta.env.SUPABASE_KEY,
      supabaseOptions: {},
      supabaseJwtSecret: import.meta.env.SUPABASE_JWT_SECRET,
      extractor: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: any): Promise<any> {
    super.validate(payload);
  }

  authenticate(req) {
    super.authenticate(req);
  }
}