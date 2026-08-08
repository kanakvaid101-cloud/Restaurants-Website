async function fetchapi() {

try {
 const response = await fetch("https://dummyjson.com/recipes")
  const data = await response.json();
  return data.recipes; 
} catch (error) {
  return[]
}

}

async function fetchapibyid(id) {

try {
 const response = await fetch(`https://dummyjson.com/recipes/${id}`)
  const data = await response.json();
  return data 
} catch (error) {
  return[]
}

}

export {fetchapi,fetchapibyid}