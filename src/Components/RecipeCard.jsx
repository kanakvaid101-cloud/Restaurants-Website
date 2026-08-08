import { FaClock, FaStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

export default function RecipeCard({recipe}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group flex flex-col h-full">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
        <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          {recipe.cuisine}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        {/* Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <span className="text-gray-600 ml-2">(4.9)</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {recipe.name}
        </h2>

        {/* Info */}
        <div className="flex justify-between items-center text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <FaClock className="text-orange-500" />
            <span>{recipe.cookTimeMinutes} Min</span>
          </div>
          <div className="flex items-center gap-2">
            <IoPeople className="text-orange-500" />
            <span>2 Servings</span>
          </div>
        </div>

        {/* Button always bottom */}
        <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition mt-auto">
          View Recipe
        </button>
      </div>
    </div>
  );
}
