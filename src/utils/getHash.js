//location.hash return #/1/, id unique
const getHash = () =>
  //default: #/1 => slice(1): /1/
  //split => ["", "1"]
  //[1] => 1
  // || OR => if: string empty o undefinde, RETURN "/"
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/"; //['/', '1', '/']

export default getHash;
