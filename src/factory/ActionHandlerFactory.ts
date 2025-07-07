import { BaseHandler } from './handlers/BaseHandler';
import { PremiumContentHandler } from './handlers/PremiumContentHandler';
import { SuggestAiNewsHandler } from './handlers/SuggestAiNewsHandler';
import { UnderageHandler } from './handlers/UnderageHandler';

export class ActionHandlerFactory {
  static create(eventType: string): BaseHandler {
    switch (eventType) {
      case 'access-premium-content':
        return new PremiumContentHandler();
      case 'suggest-ai-news':
        return new SuggestAiNewsHandler();
      case 'limit-content':
        return new UnderageHandler();
      default:
        throw new Error(`No handler for event type: ${eventType}`);
    }
  }
}
