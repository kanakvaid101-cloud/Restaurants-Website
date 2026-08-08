"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchapibyid } from "@/api/recipe";

export default function Page() {
  // URL se recipe_id milegi
  // Example: /menu/2 => recipe_id = "2"
  const params = useParams();

  const recipe_id = params.recipe_id;

  // Recipe data store karne ke liye
  const [recipe, setRecipe] = useState(null);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState(null);

  // API call
  useEffect(() => {
    if (!recipe_id) return;

    const getRecipe = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchapibyid(recipe_id);

        console.log("Recipe Data:", data);

        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setError("Recipe load nahi ho paayi.");
      } finally {
        setLoading(false);
      }
    };

    getRecipe();
  }, [recipe_id]);

  // ================= LOADING =================
  if (loading) {
    return (
      <main className="min-h-screen bg-[#0d1524] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-gray-300">
            Loading recipe...
          </p>
        </div>
      </main>
    );
  }

  // ================= ERROR =================
  if (error) {
    return (
      <main className="min-h-screen bg-[#0d1524] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-500">
            Something went wrong
          </h1>

          <p className="text-gray-400 mt-3">
            {error}
          </p>
        </div>
      </main>
    );
  }

  // ================= NO RECIPE =================
  if (!recipe) {
    return (
      <main className="min-h-screen bg-[#0d1524] text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Recipe Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d1524] text-white">

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* ================= IMAGE ================= */}

          <div className="relative">

            <div className="overflow-hidden rounded-xl border-2 border-orange-500/70">

              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-80 sm:h-105 lg:h-130 object-cover"
              />

            </div>

          </div>

          {/* ================= DETAILS ================= */}

          <div className="pt-1">

            {/* Cuisine */}

            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {recipe.cuisine}
            </span>

            {/* Title */}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {recipe.name}
            </h1>

            {/* ================= RATING / DIFFICULTY / CALORIES ================= */}

            <div className="flex flex-wrap gap-8 mt-5">

              {/* Rating */}

              <div>
                <p className="text-gray-400 text-sm mb-1">
                  Rating
                </p>

                <p className="font-semibold">

                  <span className="text-yellow-400 mr-1">
                    ★
                  </span>

                  {recipe.rating}

                  <span className="text-orange-500 ml-1">
                    ({recipe.reviewCount} Reviews)
                  </span>

                </p>
              </div>

              {/* Difficulty */}

              <div>
                <p className="text-gray-400 text-sm mb-1">
                  Difficulty
                </p>

                <p className="font-semibold">
                  {recipe.difficulty}
                </p>
              </div>

              {/* Calories */}

              <div>
                <p className="text-gray-400 text-sm mb-1">
                  Calories
                </p>

                <p className="font-semibold">
                  {recipe.caloriesPerServing} kcal
                </p>
              </div>

            </div>

            {/* ================= STATS ================= */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7">

              {/* Prep Time */}

              <div className="border border-orange-500/50 rounded-xl p-4 text-center">

                <p className="text-gray-400 text-sm">
                  Prep Time
                </p>

                <p className="font-bold mt-2">
                  {recipe.prepTimeMinutes} min
                </p>

              </div>

              {/* Cook Time */}

              <div className="border border-orange-500/50 rounded-xl p-4 text-center">

                <p className="text-gray-400 text-sm">
                  Cook Time
                </p>

                <p className="font-bold mt-2">
                  {recipe.cookTimeMinutes} min
                </p>

              </div>

              {/* Servings */}

              <div className="border border-orange-500/50 rounded-xl p-4 text-center">

                <p className="text-gray-400 text-sm">
                  Servings
                </p>

                <p className="font-bold mt-2">
                  {recipe.servings}
                </p>

              </div>

              {/* Meal */}

              <div className="border border-orange-500/50 rounded-xl p-4 text-center">

                <p className="text-gray-400 text-sm">
                  Meal
                </p>

                <p className="font-bold mt-2">
                  {recipe.mealType?.[0]}
                </p>

              </div>

            </div>

            {/* ================= TAGS ================= */}

            <div className="mt-7">

              <h2 className="text-lg font-semibold mb-3">
                Tags
              </h2>

              <div className="flex flex-wrap gap-3">

                {recipe.tags?.map((tag) => (

                  <span
                    key={tag}
                    className="border border-orange-500/60 rounded-full px-4 py-2 text-sm text-gray-200"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM CONTENT ================= */}

        <div className="grid lg:grid-cols-2 gap-10 mt-12">

          {/* ================= INGREDIENTS ================= */}

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Ingredients
            </h2>

            <div className="space-y-3">

              {recipe.ingredients?.map((ingredient, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#141e2f] border border-gray-700 rounded-lg px-4 py-3"
                >

                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>

                  <span className="text-gray-200">
                    {ingredient}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* ================= INSTRUCTIONS ================= */}

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Instructions
            </h2>

            <div className="space-y-5">

              {recipe.instructions?.map((instruction, index) => (

                <div
                  key={index}
                  className="flex gap-4"
                >

                  {/* Number */}

                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  {/* Instruction */}

                  <p className="text-gray-300 leading-7 pt-1">
                    {instruction}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}