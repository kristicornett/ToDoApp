import { useState } from 'react'
import './Home.css'


export const Home = () => {
    const [task, setTask] = useState('')
    const [toDo, setToDo] = useState([])

    const handleSubmit = (evt) => {
        evt.preventDefault()
    
        setToDo(currentToDo => {
            return [
                ...currentToDo, 
                { id: crypto.randomUUID(), title: task, completed: false},
            ]
        })
        setTask('')
    }

    const toggleToDo = (id, completed) => {
        setToDo(currentToDo => {
            return currentToDo.map(todo => {
                if(toDo.id === id){
                    return {...todo, completed}
                }
                return todo
            })
        })

    return <>
    <h1 className='header'>To Do List</h1>
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='item'>New Item</label>
                <input value={task} onChange={evt => setTask(evt.target.value)} type='text' id='item' />
            </div>
            <button className='btn'>Add</button>
        </form>
        <ul className='list' style={{listStyle: 'none'}}>
            {
                toDo.map(t => {
                    return  <li key={t.id}>
                    <label>
                        <input type='checkbox' checked={t.completed}
                        onChange={(evt => toggleToDo(toDo.id, evt.target.checked))}/>
                        {t.title}
                    </label>
                </li>
                })
            }
           
        </ul>
        
    </>
}