export const token = (value) => {
  const token = localStorage.getItem(value) || '';
  return token;
}

export const setToken = (key,value) => {
  localStorage.setItem(key, value)
}

export const removeToken = (key) => {
  localStorage.removeItem(key)
}