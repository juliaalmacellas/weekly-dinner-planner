import React from "react";
import { Text, View } from "react-native";

import { foods } from "../data/foods";
import { generateMealPlan } from "../logic/generateMealPlan";

export default function App() {

  const plan = generateMealPlan(foods);

  return (
    <View>

      <Text>Weekly Dinner Planner</Text>

      {plan.map((item, index) => (
        <Text key={index}>
          {item.day}: {item.meal}
        </Text>
      ))}

    </View>
  );
}
