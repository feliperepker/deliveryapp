export function cardColor(result : string){
  var lista = result.split(":")

  if(parseInt(lista[0]) < 2) {
    return "red"
  }else if(parseInt(lista[0]) < 10){
    return "yellow"
  }else{
    return ""
  }
}