import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Searchapi() {

  const [api, setApi] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getApi() {

    setLoading(true);
    setError("");

    try {

      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      );

      console.log(result.data.meals);

      setApi(result.data.meals || []);

    } catch (err) {

      console.log(err);

      setError("Something went wrong. Please try again.");

      setApi([]);

    } finally {

      setLoading(false);

    }
  }

  useEffect(() => {
    getApi();
  }, [input]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">

      <div className="text-center pt-12 pb-8 px-4">

        <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">
          Delicious Food
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Our Menu
        </h1>

        <p className="text-gray-500 mt-3">
          Search for your favourite meals
        </p>

        <div className="max-w-xl mx-auto mt-8 relative">

          <input
            type="text"
            placeholder="Search meals..."
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-6 py-4 pr-14 rounded-full bg-white border border-gray-200 shadow-lg outline-none text-gray-700 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
          />

          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-orange-500 text-xl">
            🔍
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">

            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>

            <p className="mt-4 text-gray-600 font-medium">
              Searching for meals...
            </p>

          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="max-w-md mx-auto text-center bg-red-50 border border-red-200 rounded-2xl p-8">

            <div className="text-5xl mb-4">
              ⚠️
            </div>

            <h2 className="text-xl font-bold text-red-600">
              Oops!
            </h2>

            <p className="text-gray-600 mt-2">
              {error}
            </p>

          </div>
        )}

        {/* No Data */}
        {!loading && !error && api.length === 0 && (
          <div className="text-center py-16">

            <div className="text-6xl mb-4">
              🍽️
            </div>

            <h2 className="text-2xl font-bold text-gray-700">
              No meals found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching for something else.
            </p>

          </div>
        )}

        {/* Food Cards */}
        {!loading && !error && api.length > 0 && (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {api.map((item) => (

              <div
                key={item.idMeal}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                </div>

                <div className="p-5">

                  <h2 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-orange-500 transition">
                    {item.strMeal}
                  </h2>

                  <div className="flex items-center justify-between mt-4">

                    <span className="text-sm text-gray-500">
                      🍴 Delicious Meal
                    </span>

                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                      View
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default Searchapi
