const BASE_API = "https://dummyjson.com/recipes";

export async function fetchRecipes() {
  try {
    const resp = await fetch(BASE_API);
    const data = await resp.json();
    return data.recipes;
  } catch (err) {
    console.error(err);
    return [];
  }
}

// fetch(BASE_API)
//   .then((res) => res.json())
//   .then((data) => console.log(data));
