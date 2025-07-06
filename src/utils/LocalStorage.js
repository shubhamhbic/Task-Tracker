export const saveToLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocal = (key, fallback = null) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

export const removeFromLocal = (key) => {
  localStorage.removeItem(key);
};
