import _ from "lodash";
// --------------------------------------------------------------------
import router from "./routes/index.js";

window.addEventListener("load", router); //cuando se carga la pagina completa
window.addEventListener("hashchange", router); //cuando cambia el hash de la url

/* 
1: home.js => href de img cambia de url
2: index.js routes => render character()
3: chacacter.js => get id mediante hash, getData(id) API_URL+id

*/
