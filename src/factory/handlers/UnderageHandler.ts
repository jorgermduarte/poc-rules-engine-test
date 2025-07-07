import { BaseHandler } from './BaseHandler';

export class UnderageHandler extends BaseHandler {
  async execute(params: any): Promise<any> {
    return {
      type: 'restricted',
      message: params.message
    };
  }
}
