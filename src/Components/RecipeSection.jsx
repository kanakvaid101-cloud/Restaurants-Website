import RecipeCard from "./RecipeCard";

export default function RecipeSection({ title, overview, data }) {
  return (
    <section className="bg-[#0d1524] py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12">

          <h2 className="text-4xl font-bold text-white">
            {title}
          </h2>

          <p className="text-gray-400 mt-3">
            {overview}
          </p>

          {/* Orange line */}
          <div className="mt-5 w-16 h-1 bg-orange-500 rounded-full"></div>

        </div>


        {/* Recipe Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {data.map((recipe, index) => (
            <RecipeCard
              key={index}
              recipe={recipe}
            />
          ))}

        </div>

      </div>

    </section>
  );
}