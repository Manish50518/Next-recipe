// interface EatsItem {
//   id: number;
//   name: string;
//   image: string;
//   ingredients: string[];
//   instructions: string[];
//   prepTimeMinutes: number;
//   cookTimeMinutes: number;
//   servings: number;
//   difficulty: string;
//   cuisine: string;
//   caloriesPerServing: number;
//   mealType: string[];
//   rating: number;
//   reviewCount: number;
// }

// interface DetailedRecipesProps {
//   selectedRecipe: EatsItem;
//   handleModel(status: boolean): void;
// }

// function DetailedRecipes({
//   selectedRecipe,
//   handleModel,
// }: DetailedRecipesProps) {
//   console.log(selectedRecipe);

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//       <div className="bg-gray-400 p-6 rounded-lg shadow-lg text-black">
//         <h2 className="text-xl font-bold">{selectedRecipe.name}</h2>
//         <p>Difficulty: {selectedRecipe.difficulty}</p>
//         <p>Cook Time: {selectedRecipe.cookTimeMinutes} minutes</p>
//         <p>Calories: {selectedRecipe.caloriesPerServing}</p>
//         <p>Ingredients: {selectedRecipe.ingredients.join(", ")}</p>
//         <button
//           onClick={() => handleModel(false)}
//           className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default DetailedRecipes;
