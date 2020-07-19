import AsyncStorage from '@react-native-community/async-storage';

export const USER_TOKEN = {
  get: async () => await AsyncStorage.getItem('userToken'),
  set: async (newValue) => {
    await AsyncStorage.setItem('userToken', `Bearer ${newValue}`);
  },
  delete: async () => await AsyncStorage.removeItem('userToken'),
};

export const LANGUAGE = {
  get: async () => await AsyncStorage.getItem('lang'),
  set: async (newValue) => {
    await AsyncStorage.setItem('lang', newValue);
  },
  delete: async () => await AsyncStorage.removeItem('lang'),
};
