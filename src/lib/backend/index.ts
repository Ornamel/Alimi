import { isSupabaseConfigured } from '../supabaseClient';
import { localBackend } from './localBackend';
import { supabaseBackend } from './supabaseBackend';

export const usingLocalBackend = !isSupabaseConfigured;

export const backend = isSupabaseConfigured ? supabaseBackend : localBackend;

export * from './types';
