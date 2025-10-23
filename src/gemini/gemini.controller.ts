import { GenerateContentResponse, GoogleGenAI } from '@google/genai';
import { Controller, Get } from '@nestjs/common';

@Controller('gemini')
export class GeminiController {
  private readonly genAI: GoogleGenAI;

  constructor() {
    this.genAI = new GoogleGenAI({});
  }

  @Get()
  async getGeminiData(): Promise<GenerateContentResponse> {
    const response = await this.genAI.models.generateContent({
      model: 'gemini-2.5-pro', // specify the model to use
      contents: 'Give me a french greeting in just 10 words.',
      config: {
        topP: 0.5,
        temperature: 0.1,
        maxOutputTokens: 200,
      },
    });
    return response;
  }

  @Get('/models')
  async listModels(): Promise<any> {
    const models = await this.genAI.models.list();
    return models;
  }
}
