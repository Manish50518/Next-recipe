import { create } from "zustand";

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

interface RecipeStore {
  selectedRecipe: EatsItem | null;
  setSelectedRecipe(recipe: EatsItem | null): void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  selectedRecipe: null,
  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
}));
