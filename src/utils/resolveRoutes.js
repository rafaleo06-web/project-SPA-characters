const resolveRoutes = (route) => {
  if (route.length <= 3) {
    //character, route:1  else=>  route : "/:id"
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return `/${route}`; //about is >elderly a 3
};
export default resolveRoutes;
