import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select'
import './Fibras.scss'

const arrayTeste = ["Defletor Central", "Defletor Lateral", "Bacalhau"]

export function Fibras(items : any, setValueItems : any){
    return(
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
    )
    
}