import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveFoods(foods) {
  const jsonValue = JSON.stringify(foods);
  await AsyncStorage.setItem("foods", jsonValue);
}

export async function loadFoods() {
  const jsonValue = await AsyncStorage.getItem("foods");
  return jsonValue != null ? JSON.parse(jsonValue) : [];
}
