import Dish from "@/components/Dish";

interface EatsItem {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  mealType: string[];
  rating: number;
  reviewCount: number;
}

function Hero({ recipes }: { recipes: EatsItem[] }) {
  return (
    <div>
      <h1 className="mb-5">Welcome to the food recipes 🍔🍚</h1>
      <Dish recipes={recipes} />
    </div>
  );
}

export default Hero;
