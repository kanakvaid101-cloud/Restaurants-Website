export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0d1524] text-white">

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="relative overflow-hidden">

        {/* Background decoration */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
                About FoodHub
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">

                Good Food.
                <br />

                <span className="text-orange-500">
                  Great Moments.
                </span>

              </h1>

              <p className="text-gray-400 text-base sm:text-lg leading-8 mt-6 max-w-xl">
                Welcome to FoodHub, your destination for delicious recipes,
                inspiring food ideas, and unforgettable dining experiences.
                We believe that great food brings people together.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="/menu"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold transition"
                >
                  Explore Menu
                </a>

                <a
                  href="/gallery"
                  className="border border-gray-600 hover:border-orange-500 hover:text-orange-500 px-7 py-3 rounded-xl font-semibold transition"
                >
                  View Gallery
                </a>

              </div>

            </div>


            {/* RIGHT - FOOD IMAGE */}

            <div className="relative">

              <div className="absolute -inset-3 bg-orange-500/20 rounded-3xl blur-xl"></div>

              <div className="relative overflow-hidden rounded-3xl border-2 border-orange-500/60">

                <img
                  src="https://cdn.dummyjson.com/recipe-images/1.webp"
                  alt="Delicious Food"
                  className="w-full h-[350px] sm:h-[450px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1524]/70 via-transparent to-transparent"></div>

                {/* Image Badge */}

                <div className="absolute bottom-6 left-6 right-6">

                  <div className="bg-[#0d1524]/90 backdrop-blur-md rounded-2xl p-5 border border-gray-700">

                    <p className="text-orange-500 font-semibold">
                      Our Philosophy
                    </p>

                    <p className="text-gray-200 mt-1">
                      Fresh ingredients. Simple recipes. Amazing taste.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* STATS */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Stat 1 */}

          <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6 text-center hover:border-orange-500/60 transition">

            <p className="text-3xl sm:text-4xl font-bold text-orange-500">
              100+
            </p>

            <p className="text-gray-400 mt-2">
              Delicious Recipes
            </p>

          </div>


          {/* Stat 2 */}

          <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6 text-center hover:border-orange-500/60 transition">

            <p className="text-3xl sm:text-4xl font-bold text-orange-500">
              20+
            </p>

            <p className="text-gray-400 mt-2">
              Food Categories
            </p>

          </div>


          {/* Stat 3 */}

          <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6 text-center hover:border-orange-500/60 transition">

            <p className="text-3xl sm:text-4xl font-bold text-orange-500">
              10K+
            </p>

            <p className="text-gray-400 mt-2">
              Happy Food Lovers
            </p>

          </div>


          {/* Stat 4 */}

          <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6 text-center hover:border-orange-500/60 transition">

            <p className="text-3xl sm:text-4xl font-bold text-orange-500">
              5★
            </p>

            <p className="text-gray-400 mt-2">
              Food Experience
            </p>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* OUR STORY */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}

          <div className="order-2 lg:order-1">

            <div className="grid grid-cols-2 gap-4">

              <img
                src="https://cdn.dummyjson.com/recipe-images/2.webp"
                alt="Food"
                className="w-full h-56 sm:h-72 object-cover rounded-2xl border border-gray-700"
              />

              <img
                src="https://cdn.dummyjson.com/recipe-images/3.webp"
                alt="Food"
                className="w-full h-56 sm:h-72 object-cover rounded-2xl border border-orange-500/50 mt-8"
              />

              <img
                src="https://cdn.dummyjson.com/recipe-images/4.webp"
                alt="Food"
                className="w-full h-56 sm:h-72 object-cover rounded-2xl border border-orange-500/50"
              />

              <img
                src="https://cdn.dummyjson.com/recipe-images/5.webp"
                alt="Food"
                className="w-full h-56 sm:h-72 object-cover rounded-2xl border border-gray-700 mt-8"
              />

            </div>

          </div>


          {/* CONTENT */}

          <div className="order-1 lg:order-2">

            <span className="text-orange-500 font-semibold">
              OUR STORY
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              We Make Food
              <span className="text-orange-500">
                {" "}More Exciting
              </span>
            </h2>

            <p className="text-gray-400 leading-8 mt-6">
              FoodHub started with a simple idea: make discovering and
              preparing delicious food easier for everyone.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              From comforting classics to exciting international dishes,
              our collection brings together recipes that are easy to
              discover and enjoyable to prepare.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              Whether you are an experienced cook or just starting your
              culinary journey, FoodHub is here to help you discover
              something delicious.
            </p>


            {/* Feature list */}

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center">
                  ✓
                </div>

                <p className="text-gray-200">
                  Easy-to-follow recipes
                </p>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center">
                  ✓
                </div>

                <p className="text-gray-200">
                  Delicious international cuisines
                </p>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center">
                  ✓
                </div>

                <p className="text-gray-200">
                  Fresh and inspiring food ideas
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* WHY FOODHUB */}
      {/* ================================================= */}

      <section className="bg-[#101a2b] border-y border-gray-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-orange-500 font-semibold">
              WHY FOODHUB
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Why People Love
              <span className="text-orange-500">
                {" "}FoodHub
              </span>
            </h2>

            <p className="text-gray-400 mt-4">
              Everything you need to make your food journey more enjoyable.
            </p>

          </div>


          {/* FEATURES */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {/* Card 1 */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-7 hover:border-orange-500/60 transition">

              <div className="w-14 h-14 rounded-xl bg-orange-500/15 flex items-center justify-center text-3xl">
                🍳
              </div>

              <h3 className="text-xl font-bold mt-5">
                Easy Recipes
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Simple and clear instructions that make cooking enjoyable,
                even for beginners.
              </p>

            </div>


            {/* Card 2 */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-7 hover:border-orange-500/60 transition">

              <div className="w-14 h-14 rounded-xl bg-orange-500/15 flex items-center justify-center text-3xl">
                🌎
              </div>

              <h3 className="text-xl font-bold mt-5">
                Global Cuisine
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Explore flavors and dishes inspired by different cultures
                from around the world.
              </p>

            </div>


            {/* Card 3 */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-7 hover:border-orange-500/60 transition">

              <div className="w-14 h-14 rounded-xl bg-orange-500/15 flex items-center justify-center text-3xl">
                ❤️
              </div>

              <h3 className="text-xl font-bold mt-5">
                Made With Love
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                We believe every great dish starts with passion, creativity,
                and quality ingredients.
              </p>

            </div>


            {/* Card 4 */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-7 hover:border-orange-500/60 transition">

              <div className="w-14 h-14 rounded-xl bg-orange-500/15 flex items-center justify-center text-3xl">
                ⭐
              </div>

              <h3 className="text-xl font-bold mt-5">
                Highly Rated
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Discover recipes loved and enjoyed by food enthusiasts.
              </p>

            </div>


            {/* Card 5 */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-7 hover:border-orange-500/60 transition">

              <div className="w-14 h-14 rounded-xl bg-orange-500/15 flex items-center justify-center text-3xl">
                ⚡
              </div>

              <h3 className="text-xl font-bold mt-5">
                Quick & Delicious
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Find recipes that fit your schedule without compromising
                on taste.
              </p>

            </div>


            {/* Card 6 */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-7 hover:border-orange-500/60 transition">

              <div className="w-14 h-14 rounded-xl bg-orange-500/15 flex items-center justify-center text-3xl">
                👨‍🍳
              </div>

              <h3 className="text-xl font-bold mt-5">
                For Everyone
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Whether you are a beginner or an experienced chef,
                there is something for everyone.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* MISSION */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="bg-orange-500 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">

          <div className="max-w-3xl mx-auto">

            <p className="text-orange-100 font-semibold">
              OUR MISSION
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
              Bringing People Together Through Food
            </h2>

            <p className="text-orange-100 leading-8 mt-5">
              Our mission is to inspire people to cook, explore new flavors,
              and create memorable moments around the table.
            </p>

            <a
              href="/menu"
              className="inline-block mt-7 bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-xl font-bold transition"
            >
              Start Exploring
            </a>

          </div>

        </div>

      </section>


    </main>
  );
}