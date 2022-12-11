export const storeValue = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getValue = (key) => {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(localStorage.getItem(key));
  }

  return null;
};
