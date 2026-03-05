import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import { generateMealPlan } from "../logic/generateMealPlan";

export default function App() {

  const [foods, setFoods] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState("");
  const [plan, setPlan] = useState([]);

  function addFood() {

    const newFood = {
      name: foodName,
      category: category
    };

    setFoods([...foods, newFood]);

    setFoodName("");
    setCategory("");
  }

  function createPlan() {

    const generatedPlan = generateMealPlan(foods);

    setPlan(generatedPlan);
  }

  return (

    <View style={{ padding: 20 }}>

      <Text>Weekly Dinner Planner</Text>

      <TextInput
        placeholder="Food name"
        value={foodName}
        onChangeText={setFoodName}
      />

      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />

      <Button
        title="Add Food"
        onPress={addFood}
      />

      <Button
        title="Generate Plan"
        onPress={createPlan}
      />

      {plan.map((item, index) => (
        <Text key={index}>
          {item.day}: {item.meal}
        </Text>
      ))}

    </View>
  );
}
