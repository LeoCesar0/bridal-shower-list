
const appKey = "@bridal-shower-IzaLeo";


export const handleStorage = () => {
  const get = (key) => {
    const data = localStorage.getItem(`${appKey}:${key}`);
    return JSON.parse(data);
  };
    
  const set = (key, data) => {
    localStorage.setItem(`${appKey}:${key}`, JSON.stringify(data));
  };
    
  const remove = (key) => {
    localStorage.removeItem(`${appKey}:${key}`);
  };
    
  const clear = () => {
    localStorage.clear();
  };
    
  return {
    getStorage: get,
    setStorage: set,
    removeStorage:remove,
    clearStorage:clear,
  };
};