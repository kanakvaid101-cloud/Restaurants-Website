"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  // ================= STATES =================

  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [selectedCuisine, setSelectedCuisine] = useState("All");


  // ================= FETCH RECIPES =================

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://dummyjson.com/recipes?limit=30"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }

        const data = await response.json();

        console.log("Gallery Recipes:", data);

        setRecipes(data.recipes);
      } catch (error) {
        console.error(error);

        setError("Recipes load nahi ho paayi.");
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);


  // ================= CUISINES =================

  const cuisines = [
    "All",
    ...new Set(recipes.map((recipe) => recipe.cuisine)),
  ];


  // ================= FILTER RECIPES =================

  const filteredRecipes = recipes.filter((recipe) => {

    const matchesSearch =
      recipe.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCuisine =
      selectedCuisine === "All" ||
      recipe.cuisine === selectedCuisine;

    return matchesSearch && matchesCuisine;
  });


  // ================= LOADING =================

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0d1524] text-white">

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <div className="flex flex-col items-center justify-center">

            <div className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

            <p className="mt-5 text-gray-400 text-lg">
              Loading gallery...
            </p>

          </div>

        </section>

      </main>
    );
  }


  // ================= ERROR =================

  if (error) {
    return (
      <main className="min-h-screen bg-[#0d1524] text-white">

        <section className="min-h-[70vh] flex items-center justify-center px-4">

          <div className="text-center">

            <div className="text-6xl mb-5">
              🍽️
            </div>

            <h1 className="text-3xl font-bold text-orange-500">
              Something went wrong
            </h1>

            <p className="text-gray-400 mt-3">
              {error}
            </p>

          </div>

        </section>

      </main>
    );
  }


  return (
    <main className="min-h-screen bg-[#0d1524] text-white">


      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

          <div className="max-w-3xl">

            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
              FoodHub Gallery
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Explore Our
              <span className="text-orange-500">
                {" "}Delicious
              </span>
              {" "}Recipes
            </h1>

            <p className="text-gray-400 text-base sm:text-lg mt-5 max-w-2xl leading-7">
              Discover delicious dishes from around the world.
              Browse our collection and find your next favorite meal.
            </p>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* SEARCH + FILTER */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-5 sm:p-6">

          <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">


            {/* SEARCH */}

            <div className="w-full lg:max-w-md">

              <label className="text-sm text-gray-400 mb-2 block">
                Search Recipe
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search delicious recipes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#0d1524] border border-gray-700 rounded-xl py-3 pl-11 pr-4 text-white outline-none focus:border-orange-500 transition"
                />

              </div>

            </div>


            {/* CUISINE FILTER */}

            <div className="w-full lg:w-auto">

              <label className="text-sm text-gray-400 mb-2 block">
                Filter by Cuisine
              </label>

              <div className="flex flex-wrap gap-2">

                {cuisines.map((cuisine) => (

                  <button
                    key={cuisine}
                    onClick={() => setSelectedCuisine(cuisine)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium
                      border transition
                      ${
                        selectedCuisine === cuisine
                          ? "bg-orange-500 border-orange-500 text-white"
                          : "border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-500"
                      }
                    `}
                  >
                    {cuisine}
                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* RESULT COUNT */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl sm:text-3xl font-bold">
              Our Gallery
            </h2>

            <p className="text-gray-400 mt-1">
              Showing {filteredRecipes.length} recipes
            </p>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* GALLERY GRID */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">

        {filteredRecipes.length === 0 ? (

          /* NO RESULTS */

          <div className="min-h-[300px] flex items-center justify-center">

            <div className="text-center">

              <div className="text-6xl mb-5">
                🍕
              </div>

              <h3 className="text-2xl font-bold">
                No Recipes Found
              </h3>

              <p className="text-gray-400 mt-2">
                Try another recipe or cuisine.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCuisine("All");
                }}
                className="mt-5 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition"
              >
                Clear Filters
              </button>

            </div>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredRecipes.map((recipe) => (

              <div
                key={recipe.id}
                className="group bg-[#141e2f] border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/70 hover:-translate-y-1 transition-all duration-300"
              >

                {/* ================= IMAGE ================= */}

                <div className="relative overflow-hidden">

                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />


                  {/* CUISINE */}

                  <div className="absolute top-4 left-4">

                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {recipe.cuisine}
                    </span>

                  </div>


                  {/* RATING */}

                  <div className="absolute top-4 right-4">

                    <span className="bg-[#0d1524]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">

                      <span className="text-yellow-400">
                        ★
                      </span>

                      {" "}{recipe.rating}

                    </span>

                  </div>


                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>

                </div>


                {/* ================= CARD CONTENT ================= */}

                <div className="p-5">

                  <h3 className="text-xl font-bold line-clamp-1 group-hover:text-orange-500 transition">
                    {recipe.name}
                  </h3>


                  {/* INFO */}

                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">

                    <span>
                      ⏱ {recipe.prepTimeMinutes} min
                    </span>

                    <span>
                      👥 {recipe.servings}
                    </span>

                    <span>
                      🔥 {recipe.caloriesPerServing}
                    </span>

                  </div>


                  {/* TAGS */}

                  <div className="flex flex-wrap gap-2 mt-4">

                    {recipe.tags?.slice(0, 2).map((tag) => (

                      <span
                        key={tag}
                        className="text-xs border border-gray-600 text-gray-400 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>


                  {/* BUTTON */}

                  <Link
                    href={`/menu/${recipe.id}`}
                    className="block mt-5"
                  >

                    <button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
                    >
                      View Recipe
                    </button>

                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        <div className="relative overflow-hidden bg-orange-500 rounded-3xl px-6 sm:px-10 py-10 sm:py-14">

          <div className="relative z-10 max-w-2xl">

            <p className="text-orange-100 font-semibold mb-2">
              Hungry for more?
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Find Your Next Favorite Dish 🍽️
            </h2>

            <p className="text-orange-100 mt-3">
              Explore our complete collection of delicious recipes
              and start cooking something amazing today.
            </p>

            <Link
              href="/menu"
              className="inline-block mt-6 bg-white text-orange-500 hover:bg-orange-50 px-7 py-3 rounded-xl font-bold transition"
            >
              Explore Menu
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}