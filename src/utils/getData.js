const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API; //
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};
export default getData;

/* //pagination 
{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  date characters
  "results": [
     datos de personajes aquí...
  ]
} */
