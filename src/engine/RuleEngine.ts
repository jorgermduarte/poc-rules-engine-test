import { Engine } from 'json-rules-engine';

export class RuleEngine {
  private engine = new Engine();

  constructor(rules: any[]) {
    rules.forEach(rule => this.engine.addRule(rule));
  }

  async evaluate(facts: any): Promise<any[]> {
    const result = await this.engine.run(facts);
    return result.events;
  }

}
