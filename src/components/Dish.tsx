import { fetchRecipes } from "@/services/recipesServices";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
// import DetailedRecipes from "./DetailedRecipes";
import { useRecipeStore } from "@/store/useRecipeStore";
import { useRouter } from "next/router";
import { CiStar } from "react-icons/ci";

function Dish() {
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

  const [eats, setEats] = useState<EatsItem[]>([]);

  const [loading, setLoading] = useState(false);
  const { setSelectedRecipe } = useRecipeStore();
  const router = useRouter();

  function handleRecipeClick(recipe: EatsItem) {
    if (!recipe) return;
    setSelectedRecipe(recipe);
    router.push("/recipedetails");
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await fetchRecipes();
        setEats(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {loading && (
          <p className="text-center text-lg font-semibold">Loading...</p>
        )}
        {eats.map((item) => (
          <div key={item.id} className="w-full sm:w-[250px]  p-2">
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={400}
              onClick={() => handleRecipeClick(item)}
              className="rounded-3xl cursor-pointer max-w-full h-auto"
            />
            <p className="text-base sm:text-lg font-semibold mt-2">
              {item.name}
            </p>
            <strong
              className={`text-sm sm:text-base ${
                item.difficulty === "Easy"
                  ? "text-green-700"
                  : item.difficulty === "Medium"
                  ? "text-orange-500"
                  : "text-red-700"
              }`}
            >
              {item.difficulty}
            </strong>
            <div className="flex items-center gap-3 mt-2 text-sm sm:text-base">
              <p className="flex items-center gap-1">
                <FaRegClock className="text-lg" /> {item.cookTimeMinutes} min
              </p>
              <p className="flex items-center gap-1">
                <CiStar className="text-lg" /> {item.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dish;
