async function poke(){
    try {
        let poke = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
        let pokeJSON = await poke.json()
        console.log(pokeJSON)
    } catch (error) {
        console.log(error)
    }
} 
poke()