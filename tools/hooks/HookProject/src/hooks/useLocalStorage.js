import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  const fetchStoredValue = useCallback(async () => {
    try {
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (error) {
      console.error('Error fetching stored value:', error);
    }
  }, [key, initialValue]);

  const setValue = async (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting stored value:', error);
    }
  };

  useEffect(() => {
    fetchStoredValue();
  }, [fetchStoredValue]);

  return [storedValue, setValue];
};

export default useLocalStorage;
