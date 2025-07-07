export class ActionClassifierService {
  classify(text: string): 'search' | 'recommend' | 'default' {
    if (text.includes('find')) return 'search';
    if (text.includes('suggest')) return 'recommend';
    return 'default';
  }
}
