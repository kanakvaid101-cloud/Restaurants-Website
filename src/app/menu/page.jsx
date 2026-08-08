import { fetchapi } from "@/api/recipe";
import RecipeCard from "@/Components/RecipeCard";

export default async function Page() {
  const recipes = await fetchapi();

  return (
    <main className="min-h-screen bg-[#0b1424] text-white">

      {/* ================= PAGE HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">

        <div className="mb-8">
          <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FoodHub Menu
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold">
            Explore Our{" "}
            <span className="text-orange-500">
              Recipes
            </span>
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Discover delicious dishes from around the world.
          </p>

          {/* Orange underline */}
          <div className="w-20 h-1 bg-orange-500 rounded-full mt-5"></div>
        </div>

      </section>


      {/* ================= RECIPE GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              All Recipes
            </h2>

            <p className="text-gray-400 mt-1">
              Showing {recipes.length} recipes
            </p>
          </div>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>

      </section>

    </main>
  );
}