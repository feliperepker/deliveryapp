export function compareDate(date : Date){


    var dataBD = new Date(date.getFullYear(), date.getMonth(), date.getDay(), date.getHours(), date.getMinutes(), 0, 0);
    var dataAtual = new Date();
    var minutosTakt = dataBD.getMinutes() + 10
    var horas = dataAtual.getHours() - dataBD.getHours()  
    var minutos = (minutosTakt - dataAtual.getMinutes()) - 60 * horas 
    var segundos = 0;
    var time ="";
    if(minutos < 0){
      segundos = dataBD.getSeconds() - dataAtual.getSeconds() 
      minutos = minutos + 1 
      minutos == 0 ? time = "-" + minutos.toString() + ":" + converter(Math.abs(segundos)) :
      time = minutos.toString() + ":" + converter(Math.abs(segundos))
      
    }else{
      segundos = dataBD.getSeconds() - dataAtual.getSeconds()  + 60  
      time = minutos.toString() + ":" + converter(Math.abs(segundos))
    }
    
   return time;
}

function converter(item : number){
  var a = ""
  item < 10 ? a = "0" + item.toString() : a = item.toString()     
  return a
}