/*Using what we learned in class, create a mockup of a Pokemon card. when you enter a Pokemon name, it should make an 
API call and get all the data.. then display some of that information to your html page
(couple of pokemon names to try: "ditto", "pikachu", "charizard")


Features should include:
-name
-image(hint: the path to the image is 'sprites' -> 'front_default')


Extra credit: List out all the pokemon's abilities
*/


const my_form = document.querySelector('form')
console.log(my_form)

my_form.addEventListener('click', (event) => {
  event.preventDefault()
  poke_name = event.target[0].value
  console.log(poke_name)
  pokemonData(poke_name)
})
const pokemonData = async (pokename) => {
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
      const data = await response.json()
      console.log(data)
      addPokemon(data)
    } catch(error) {
      console.error(`there was an error: ${error}`)
    }
  }

  const card = document.querySelector('#card')
  console.log(card)
  
  const addPokemon = (data) => {
    console.log(data.sprites.front_default)
    card.innerHTML = `
        <img src="${data.sprites.front_default}">
    `
  }


