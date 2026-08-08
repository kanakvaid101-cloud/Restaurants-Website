import { fetchapi } from '@/api/recipe'
import React from 'react'
import RecipeCard from '@/Components/RecipeCard'

export default async function page() {
  const recipes = await fetchapi()
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
           {
         recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))
      }     
          </div>
    
  )
}

