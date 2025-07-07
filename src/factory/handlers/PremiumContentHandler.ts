import { BaseHandler } from './BaseHandler';

export class PremiumContentHandler extends BaseHandler {
  async execute(params: any): Promise<any> {
    return {
      type: 'premium',
      message: params.message
    };
  }
}