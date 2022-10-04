import { Card } from "../Form/Card"
import '../PgFibras/index.scss'
import { compareDate } from "../../utils/compareDate"
import { useState, useEffect} from 'react';
import { cardColor } from "../../utils/cardColor"
import axios from 'axios';
import {  ChevronDownIcon,  } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select'

interface Pedido{
  id : number;
  area : string;
  pedido : string;
  status : boolean;
  date : Date;
}
const arrayTeste = ["Bateria", "Componente"]


export function PgBateria(){
  const [pedido, setPedido] = useState<Pedido>(Object);
  const [items, setValueItems] = useState<string>(String);
  const [result, setResult] = useState<string>(String)
  const [color, setColor] = useState<string>(String)
  
  function mudarItens(){
    //Função que requisita a alteração de algum item no ID 3
    if (pedido.status == true){
      axios.put("http://localhost:5264/Edicao/3", 
    {
      id: 3,
      area: pedido.area,
      pedido: items,
      status: true,
      date: new Date
  })
}else{
      axios.put("http://localhost:5264/Pedidos/3", 
      {
        id: 3,
        area: pedido.area,
        pedido: items,
        status: true,
        date: new Date
    })
    }
  }

  useEffect(() => {
     //Busca dados do BD a cada 10s para atualizar status
    const interval2 = setInterval(() => {
      axios("http://localhost:5264/Pedidos/3").then(response => {
          setPedido(response.data)
        })
    }, 10000);
    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    //Insere as informações nos elementos
    const interval = setInterval(() => {
      setResult(compareDate(new Date(pedido.date)).toString())
      setColor(cardColor(result))
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() =>{  
    //Busca dados do BD quando a pagina carrega
    axios("http://localhost:5264/Pedidos/3").then(response => {
      setPedido(response.data)
    })
  },[])

  return(

    <div className="center-container">
    <div className="center-div">
      <h3>BATERIA</h3>
       <p>Escolha um Item</p>
    </div>

      <div className="container-fibras">
       <div className="container-button">
        <div className="container-select">
        <div className='margin'>
          
          <Select.Root value={items} onValueChange={setValueItems}>
        <Select.Trigger className='trigger'>
          <Select.Value placeholder="Selecione um item"/>
          <Select.Icon ><ChevronDownIcon /></Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className='content'>
            <Select.ScrollUpButton />
            <Select.Viewport className='viewport'>

            { arrayTeste.map(item =>{
                return(
                <Select.Item key={item} className="item" value={item}>
                  <Select.ItemText>{item}</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                )
            })}
        
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Portal>
      </Select.Root>

    </div>
        </div>
        <button onClick={mudarItens} className="button">CHAMAR OPERADOR</button>
       </div>
       <div className="card-fibras">
         <Card
      color= {pedido.status == true ? color : ""}
      timer = {pedido.status == true ? result : "--:--"}
      item = {pedido.status == true ? pedido.pedido : "SEM PEDIDOS"}
      />
       </div>
    </div>
    </div>
  )
}
