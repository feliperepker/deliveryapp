import axios from "axios";
import { useEffect, useState } from "react";
import { cardColor } from "../../utils/cardColor";
import { compareDate } from "../../utils/compareDate";
import { Card } from "../Form/Card";
import './index.scss'

interface Pedido{
  id : number;
  area : string;
  pedido : string;
  status : boolean;
  date : Date;
}




export function PgJacto(){
  function cancelarPedido(num :  number){
    var area = ""

    if (num == 1){
      area = "Fibras"
    }else if (num == 2){
      area = "Grades"
    }else if (num == 3){
      area = "Bateria"
    }else{
      area = "Tanque"
    }
    axios.put(`http://localhost:5264/Pedidos/${num.toString()}`, 
    {
      id: num,
      area: area,
      pedido: "Cancelado",
      status: false,
      date: new Date()
  })
  }


  const [resultFibras, setResultFibras] = useState<string>(String)
  const [colorFibras, setColorFibras] = useState<string>(String)
  const [pedidoFibras, setPedidoFibras] = useState<Pedido>(Object);
  const [resultGrades, setResultGrades] = useState<string>(String)
  const [colorGrades, setColorGrades] = useState<string>(String)
  const [pedidoGrades, setPedidoGrades] = useState<Pedido>(Object);
  const [resultBateria, setResultBateria] = useState<string>(String)
  const [colorBateria, setColorBateria] = useState<string>(String)
  const [pedidoBateria, setPedidoBateria] = useState<Pedido>(Object);
  const [resultTanque, setResultTanque] = useState<string>(String)
  const [colorTanque, setColorTanque] = useState<string>(String)
  const [pedidoTanque, setPedidoTanque] = useState<Pedido>(Object);

  useEffect(() => {
    const interval2 = setInterval(() => {
      //Buscando dados a cada 10s para atualizar status 
      axios("http://localhost:5264/Pedidos/1").then(response => {
          setPedidoFibras(response.data)
        })
        axios("http://localhost:5264/Pedidos/2").then(response => {
          setPedidoGrades(response.data)
        })  
        axios("http://localhost:5264/Pedidos/3").then(response => {
          setPedidoBateria(response.data)
        })  
        axios("http://localhost:5264/Pedidos/4").then(response => {
          setPedidoTanque(response.data)
        })  
    }, 10000);
    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      //Adicionando dados nos elementos de Fibras
      setResultFibras(compareDate(new Date(pedidoFibras.date)).toString())
      setColorFibras(cardColor(resultFibras))
      //Adicionando dados nos elementos de Grades
      setResultGrades(compareDate(new Date(pedidoGrades.date)).toString())
      setColorGrades(cardColor(resultGrades))
      //Adicionando dados nos elementos de Bateria
      setResultBateria(compareDate(new Date(pedidoBateria.date)).toString())
      setColorBateria(cardColor(resultBateria))
      //Adicionando dados nos elementos de Tanque
      setResultTanque(compareDate(new Date(pedidoTanque.date)).toString())
      setColorTanque(cardColor(resultTanque))
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() =>{  
    //Buscando dados assim que a página carrega
    axios("http://localhost:5264/Pedidos/1").then(response => {
      setPedidoFibras(response.data)
    })
    axios("http://localhost:5264/Pedidos/2").then(response => {
      setPedidoGrades(response.data)
    })
    axios("http://localhost:5264/Pedidos/3").then(response => {
      setPedidoBateria(response.data)
    })
    axios("http://localhost:5264/Pedidos/4").then(response => {
      setPedidoTanque(response.data)
    })
  },[])

  return(
    <div className="container-cards">
      <div>
        <div className="container-jacto">
          <h3>FIBRAS</h3>
          <Card
          color={pedidoFibras.status == true ? colorFibras : ""}
          timer={pedidoFibras.status == true ? resultFibras : "--:--"}
          item={pedidoFibras.status == true ? pedidoFibras.pedido : "SEM PEDIDOS"}
          />
          <button onClick={() => cancelarPedido(1)} className="button-finish">CONCLUIR</button>
        </div>
        
        <div className="container-jacto">
          <h3>GRADES</h3>
          <Card
          color={pedidoGrades.status == true ? colorGrades : ""}
          timer={pedidoGrades.status == true ? resultGrades : "--:--"}
          item={pedidoGrades.status == true ? pedidoGrades.pedido : "SEM PEDIDOS"}
          />
          <button onClick={() => cancelarPedido(2)} className="button-finish">CONCLUIR</button>
        </div>
      </div>
      <div>
        <div className="container-jacto">
          <h3>BATERIA</h3>
          <Card
          color={pedidoBateria.status == true ? colorBateria : ""}
          timer={pedidoBateria.status == true ? resultBateria : "--:--"}
          item={pedidoBateria.status == true ? pedidoBateria.pedido : "SEM PEDIDOS"}
          />
          <button onClick={() => cancelarPedido(3)} className="button-finish">CONCLUIR</button>
        </div>
        <div className="container-jacto">
          <h3>TANQUE</h3>
          <Card
          color={pedidoTanque.status == true ? colorTanque : ""}
          timer={pedidoTanque.status == true ? resultTanque : "--:--"}
          item={pedidoTanque.status == true ? pedidoTanque.pedido : "SEM PEDIDOS"}
          />
          <button onClick={() => cancelarPedido(4)} className="button-finish">CONCLUIR</button>
        </div>
      </div>
    </div>
  )
  
}