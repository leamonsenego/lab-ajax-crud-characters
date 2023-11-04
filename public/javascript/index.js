const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {

  const characterContainer = document.querySelector(".character-container")
  const characterCard = document.querySelector(".character-info")



    charactersAPI.getAllCharacters().then(({data : charactersFromApi}) => {
      charactersFromApi.forEach(character => {
        const characterCard = generateCharacterCard(character)
      })

    })

      function generateCharacterCard(name, occupation, isCartoon, weapon){
    const {name, occupation, isCartoon, weapon} = character
    const characterCard = document.createElement("div")
    characterCard.class = "character-info"
    characterCard.innerHTML = `
          <div class="name">Name: ${name}</div>
          <div class="occupation">Occupation: ${occupation}</div>
          <div class="cartoon">is a Cartoon?: ${isCartoon}</div>
          <div class="weapon">Weapon: ${weapon}</div>
        `
      }



    })})

