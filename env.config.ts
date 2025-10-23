import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: Number.parseInt(process.env.PORT || '3000'),
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
};
