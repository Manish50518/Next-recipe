import Hero from "@/components/Hero";
import { fetchRecipes } from "@/services/recipesServices";

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

export default function Home({ recipes }: { recipes: EatsItem[] }) {
  return (
    <main className="p-4 max-w-[800px] mx-auto">
      <Hero recipes={recipes} />
    </main>
  );
}

// Fetch data on the server before rendering the page
export async function getServerSideProps() {
  const recipes: EatsItem[] = await fetchRecipes();
  return {
    props: { recipes }, // Pass data to the page via props
  };
}
