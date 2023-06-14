import getData from "../utils/getData.js";

const home = async () => {
  const characters = await getData();
  const view = /*html*/ `
  <div class="characters">
    ${characters.results
      .map(
        (character) => /*html*/ `
      <article class="character-item">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}" />
          <h2>${character.name}</h2>
        </a>
      </article>
    `
      )
      .join("")} 
  </div>
  `;
  return view; //join convierte array a string, sin ningun separador
};

export default home;
