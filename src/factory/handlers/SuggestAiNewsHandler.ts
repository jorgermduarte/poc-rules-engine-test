import { BaseHandler } from './BaseHandler';

export class SuggestAiNewsHandler extends BaseHandler {
  async execute(params: any): Promise<any> {
    return {
      type: 'ai-news',
      message: params.message
    };
  }
}
