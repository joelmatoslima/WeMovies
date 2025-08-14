type TKey = "cart";

export default class LocalStorage {
  static getItem<T>(key: TKey): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  static setItem<T>(key: TKey, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: TKey) {
    localStorage.removeItem(key);
  }
}
