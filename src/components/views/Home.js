import './Home.css'


export const Home = () => {
    const [task, setTask] = useState('')



    return <>
    <h1 className='header'>To Do List</h1>
        <form className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='item'>New Item</label>
                <input value={task} type='text' id='item' />
            </div>
            <button className='btn'>Add</button>
        </form>
        <ul className='list' style={{listStyle: 'none'}}>
            <li>
                <label>
                    <input type='checkbox' />
                    Item 1
                </label>
            </li>
            <li>
                <label>
                    <input type='checkbox' />
                    Item 2
                </label>
            </li>
        </ul>
        
    </>
}