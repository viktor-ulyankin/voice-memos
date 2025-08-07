const windowLocalStorage =
  typeof window !== "undefined" ? window?.localStorage : undefined;

export const ls = {
  get: <T>(key: string): T | null => {
    try {
      const stringResult = windowLocalStorage?.getItem(key);

      return stringResult ? JSON.parse(stringResult) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  },
  set<T>(key: string, value: T) {
    try {
      if (!windowLocalStorage) return false;
      windowLocalStorage.setItem(key, JSON.stringify(value));

      return true;
    } catch (error) {
      console.error("Error writing to localStorage:", error);
      return false;
    }
  },
  remove(key: string) {
    if (!windowLocalStorage) return false;
    windowLocalStorage.removeItem(key);

    return true;
  },
};
