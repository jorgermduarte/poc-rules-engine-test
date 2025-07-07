export class EmbeddingService {
  async getEmbedding(text: string): Promise<number[]> {
    // Simulação simples
    return text.split('').map(char => char.charCodeAt(0) % 10);
  }
}
