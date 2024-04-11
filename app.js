let reset = document.getElementById('reset')
async function fetchData(){
    try{
        const pokemonName = document.querySelector('#pokemonName').value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response){
            throw new Error("Not found :(")
        }
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;
        const img = document.getElementById('pokemonSprite')
        img.src = pokemonSprite;
        img.style.display = 'block'

        //reset function
        reset = document.getElementById('reset')
        reset.addEventListener('click',function(){
            img.style.display = 'none'
            document.querySelector('#pokemonName').value = '';
        })
        
    }catch(error){
        if(error){
            const h = document.querySelector('#error')
            h.style.display = 'block';
            
            reset.addEventListener('click',function(){
            h.style.display = 'none';
            document.querySelector('#pokemonName').value = '';
            })
        }
    }
}

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        e.preventDefault()
        fetchData()
    }
})

