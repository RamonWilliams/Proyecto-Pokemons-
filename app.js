const URL = "https://pokeapi.co/api/v2/pokemon/";
let ListaPokemon = []

window.onload = () => {
init();
}

const init = async () => {
const pokemons = await getPokemons();
mappedPokemon(pokemons);
}


const getPokemons = async () => {    
    
    for(index=1; index<151; index++) {
        const pokemonApi = await fetch (`${URL}${index}`);
        
        const convertoJson = await pokemonApi.json();
        ListaPokemon.push(convertoJson);
    }
    
} 

const mappedPokemon = () => {
    ListaPokemon.map((pokemon) => {

        return printPokemon ({nombre: pokemon.name,
             imagen: pokemon.sprites.other.dream_world.front_default,
             especies: pokemon.species.name,
             habilidades: getAbility(pokemon.abilities),
             especie:pokemon.species.name,
             tipo: getType(pokemon.types),
             peso: pokemon.weight,
           });
})}


const getAbility = (abilities) =>{
    const abilitiesName =[];
      abilities.forEach((element)=>{
      abilitiesName.push(element.ability.name)
 
    })
    return abilitiesName;
   }

    const getType = (types) =>{
       const listTypes =[];
       types.forEach(type=>{
           listTypes.push(type.type.name)
       })
       return listTypes
    }

const printPokemon = (pokemon) => {
        let pokemonContainer = document.querySelector('#pokemonContainer')
        pokemonContainer.innerHTML += `                 
            <div class="main-container">
            <div class="image-container">
            <img src="${pokemon.imagen}" alt="${pokemon.nombre}"/>
           <h3>${pokemon.nombre}</h3>    
           <h2> ${pokemon.tipo}</h2>
           <p>${pokemon.especie} </p>        
           <p>${pokemon.habilidades}</p>   
           <p> <b> ${pokemon.peso} </b> </p>
                       
           </div>
        </div>
        ` 
}

//tipo: pokemon.types.type.name
//<p>${pokemon.tipo}</p>