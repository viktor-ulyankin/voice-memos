const windowLocalStorage =
  typeof window !== "undefined" ? window?.localStorage : undefined;

export const ls = {
  get(key: string) {
    return windowLocalStorage?.getItem(key) || null;
  },
  set(key: string, value: string) {
    if (windowLocalStorage) {
      windowLocalStorage.setItem(key, value);

      return true;
    }

    return false;
  },
  remove(key: string) {
    if (windowLocalStorage) {
      windowLocalStorage.removeItem(key);

      return true;
    }

    return false;
  },
};
