import './Card.css';  
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";  
import { FaRegTrashAlt } from "react-icons/fa";  

interface ITodo {  
    id: number,  
    text: string,  
    date: string,  
    isChecked: boolean  
}  

function Card({ oneTodo, remove, changeTodo }: { oneTodo: ITodo, remove: (value: number) => void, changeTodo: (value: number) => void }) {  
    return (  
        <div className={`card ${oneTodo.isChecked ? 'completed' : ''}`}>  
            <div className='card-left' onClick={() => changeTodo(oneTodo.id)}>  
                {oneTodo.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}  
                <span className='card-left__text'>{oneTodo.text}</span>  
            </div>  
            <div className='card-right'>  
                <span className='card-left__date'>{oneTodo.date}</span>  
                <button className='card-left__button' onClick={() => remove(oneTodo.id)}><FaRegTrashAlt /></button>  
            </div>  
        </div>  
    );  
}  

export default Card;