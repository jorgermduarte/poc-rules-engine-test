import express from 'express';
import { RuleEngine } from '../engine/RuleEngine';
import { ActionHandlerFactory } from '../factory/ActionHandlerFactory';
import baseRules from '../engine/rules/baseRules.json';
import { UserContract } from '../types/UserContract';

const router = express.Router();
const engine = new RuleEngine(baseRules);

router.post('/analyze', async (req, res) => {
  const user: UserContract = req.body;

  const events = await engine.evaluate(user);

  const responses = await Promise.all(
    events.map(async event => {
      const handler = ActionHandlerFactory.create(event.type);
      return handler.execute(event.params);
    })
  );

  res.json({ results: responses });
});

export default router;
