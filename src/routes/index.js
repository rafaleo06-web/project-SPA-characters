import header from "../template/header.js";
import home from "../pages/home.js";
import character from "../pages/character.js";
import error404 from "../pages/error404.js";
import getHash from "../utils/getHash.js";
import resolveRoutes from "../utils/resolveRoutes.js";

const routes = {
  "/": home,
  "/:id": character,
  "/contact": "Contact",
};

const router = async () => {
  const headerElement = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : error404; //if("/"):render=home() o if("/:id"):render=character()
  content.innerHTML = await render();

  headerElement.innerHTML = await header(); //espera render del DOM
};

export default router;
