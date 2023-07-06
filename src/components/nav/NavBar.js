import { Link, useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className='navbar'>
            <li className='navbar__item active'>
                <Link className='navbar__link' to='/completed'>Completed Tasks</Link>
            </li>
            <li className='navbar__item active'>
                <Link className='navbar__link' to='/tasks'>Tasks</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("todo_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}