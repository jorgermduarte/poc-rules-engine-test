// src/types/UserContract.ts
export interface UserContract {
  age: number;
  country: string;
  subscription: 'free' | 'premium' | 'gold';
  interests: string[];
}