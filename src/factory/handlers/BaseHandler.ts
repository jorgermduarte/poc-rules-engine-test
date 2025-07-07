export abstract class BaseHandler {
  abstract execute(facts: any): Promise<any>;
}