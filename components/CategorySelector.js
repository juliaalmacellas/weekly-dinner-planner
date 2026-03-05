import React from "react";
import { View, Button } from "react-native";

export default function CategorySelector({ setCategory }) {

  return (
    <View>

      <Button
        title="Vegetarian"
        onPress={() => setCategory("vegetarian")}
      />

      <Button
        title="Meat"
        onPress={() => setCategory("meat")}
      />

      <Button
        title="Light"
        onPress={() => setCategory("light")}
      />

    </View>
  );
}
