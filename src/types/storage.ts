export interface IStorage {
  get<T>(key: string): T | null;
  set<T>(key: string, value: T): boolean;
  remove(key: string): void;
}
