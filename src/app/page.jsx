import { fetchapi } from '@/api/recipe'
import RecipeSection from '@/Components/RecipeSection'
import React from 'react'

export default async function page() {
  const recipes = await fetchapi();
  const popular_recipes = recipes.slice(0,4) 
  const trending_recipes = recipes.slice(0,4)
 

  return (
    <main>
      <RecipeSection 
        title="Popular Recipes" 
        overview="Discover our most loved dishes prepared by expert chefs."  data={popular_recipes}
      />
      <RecipeSection 
        title="Trending Recipes" 
        overview="Discover our most loved trending dishes prepared by expert chefs." data={trending_recipes}
      />
      <RecipeSection 
        title="Today Recipes" 
        overview="Discover our most loved today dishes prepared by expert chefs." data={trending_recipes}
      />
    </main>
  )
}
