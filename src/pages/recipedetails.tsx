import { useRecipeStore } from "@/store/useRecipeStore";
import Image from "next/image";
import { useRouter } from "next/router";

function RecipeDetails() {
  const { selectedRecipe } = useRecipeStore();
  const router = useRouter();

  if (!selectedRecipe) {
    return (
      <div className="flex  flex-col items-center gap-4 justify-center min-h-screen">
        <p className=" text-gray-500">No recipes selected</p>
        <button
          onClick={() => router.back()}
          className="rounded-lg px-4 py-2 w-[80px] bg-red-500 text-white hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => router.back()}
          className="rounded-lg px-4 py-2 bg-red-500 text-white hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
        <div className="w-full flex justify-center">
          <Image
            src={selectedRecipe.image}
            alt={selectedRecipe.name}
            width={400}
            height={400}
            className="rounded-2xl"
          />
        </div>

        <section className="w-full">
          <h2 className="underline text-xl font-semibold text-center sm:text-left">
            {selectedRecipe.name}
          </h2>

          <div className="flex flex-col sm:flex-row justify-between text-gray-700 mt-2">
            <h4>⏳ {selectedRecipe.prepTimeMinutes} min</h4>
            <h4>🍽️ Serves: {selectedRecipe.servings} people</h4>
          </div>

          <ul className="mt-4">
            <h2 className="font-semibold">🛒 Ingredients:</h2>
            {selectedRecipe.ingredients.map((item, id) => (
              <li key={id} className="list-disc ml-5 text-gray-600">
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-4">
            <h2 className="font-semibold">👨‍🍳 Instructions:</h2>
            {selectedRecipe.instructions.map((item, id) => (
              <li key={id} className="list-disc ml-5 text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default RecipeDetails;
