import './Card.scss'

interface ColorProps{
  color: string;
  timer: string;
  item: string;
}

export function Card(props : ColorProps){
  return(
    <div className={`card-container ${props.color ? props.color : ''}`}>
        <h4>{props.item}</h4>
        <p>{props.timer}</p>
    </div>
  )
  
}