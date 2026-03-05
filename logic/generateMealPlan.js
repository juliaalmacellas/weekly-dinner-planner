export function generateMealPlan(foods) {

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const plan = [];

  let lastCategory = null;

  for (let i = 0; i < days.length; i++) {

    const availableFoods = foods.filter(
      food => food.category !== lastCategory
    );

    const randomIndex = Math.floor(
      Math.random() * availableFoods.length
    );

    const selectedFood = availableFoods[randomIndex];

    plan.push({
      day: days[i],
      meal: selectedFood.name
    });

    lastCategory = selectedFood.category;
  }

  return plan;
}
