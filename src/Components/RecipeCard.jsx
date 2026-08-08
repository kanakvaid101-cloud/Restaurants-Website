import { FaClock, FaStar, FaFire } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
  return (
    <div
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        bg-[#141e2f]
        border
        border-gray-700
        hover:border-orange-500/60
        shadow-lg
        hover:shadow-2xl
        hover:shadow-orange-500/10
        transition-all
        duration-300
      "
    >

      {/* ================= IMAGE ================= */}

      <div className="relative overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="
            w-full
            h-64
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />

        {/* Dark image overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />


        {/* Cuisine Badge */}

        <span
          className="
            absolute
            top-4
            left-4
            bg-orange-500
            text-white
            px-4
            py-1.5
            rounded-full
            text-sm
            font-semibold
            shadow-lg
          "
        >
          {recipe.cuisine}
        </span>


        {/* Rating Badge */}

        <div
          className="
            absolute
            top-4
            right-4
            flex
            items-center
            gap-1.5
            bg-[#0d1524]
            text-white
            px-3
            py-1.5
            rounded-full
            text-sm
            font-semibold
            shadow-lg
          "
        >
          <FaStar className="text-yellow-400 text-xs" />

          <span>
            {recipe.rating}
          </span>
        </div>

      </div>


      {/* ================= CONTENT ================= */}

      <div className="p-6 flex flex-col flex-1">

        {/* Recipe Title */}

        <h2
          className="
            text-xl
            font-bold
            text-white
            mb-5
            leading-snug
            group-hover:text-orange-500
            transition-colors
            duration-300
            line-clamp-2
          "
        >
          {recipe.name}
        </h2>


        {/* ================= RECIPE INFO ================= */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-6
            gap-y-3
            text-gray-300
            text-sm
            mb-5
          "
        >

          {/* Cook Time */}

          <div className="flex items-center gap-2">

            <FaClock className="text-orange-500" />

            <span>
              {recipe.cookTimeMinutes} min
            </span>

          </div>


          {/* Servings */}

          <div className="flex items-center gap-2">

            <IoPeople className="text-orange-500" />

            <span>
              {recipe.servings} servings
            </span>

          </div>


          {/* Calories */}

          <div className="flex items-center gap-2">

            <FaFire className="text-orange-500" />

            <span>
              {recipe.caloriesPerServing} kcal
            </span>

          </div>

        </div>


        {/* ================= TAGS ================= */}

        <div className="flex flex-wrap gap-2 mb-6">

          {recipe.tags?.slice(0, 2).map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="
                px-3
                py-1.5
                rounded-full
                border
                border-gray-600
                text-gray-300
                text-xs
                hover:border-orange-500
                hover:text-orange-500
                transition
              "
            >
              {tag}
            </span>
          ))}

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="mt-auto">

          {/* Rating */}

          <div className="flex items-center gap-2 mb-5">

            <div className="flex items-center gap-1">

              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={
                    star <= Math.round(recipe.rating)
                      ? "text-yellow-400 text-sm"
                      : "text-gray-600 text-sm"
                  }
                />
              ))}

            </div>

            <span className="text-gray-400 text-sm">
              {recipe.rating}
            </span>

            <span className="text-gray-600">
              •
            </span>

            <span className="text-gray-400 text-sm">
              {recipe.reviewCount} reviews
            </span>

          </div>


          {/* View Recipe */}

          <Link
            href={`/menu/${recipe.id}`}
            className="
              block
              w-full
              text-center
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-3.5
              rounded-xl
              font-semibold
              transition-all
              duration-300
              hover:shadow-lg
              hover:shadow-orange-500/20
              active:scale-[0.98]
            "
          >
            View Recipe
          </Link>

        </div>

      </div>

    </div>
  );
}