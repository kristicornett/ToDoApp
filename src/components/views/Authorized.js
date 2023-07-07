import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { NavBar } from '../nav/NavBar'

export const Authorized = () => {
    const location = useLocation()

    if (localStorage.getItem('todo_user')){
        const userToken = JSON.parse(localStorage.getItem('todo_user'))
        return <>
            <div className='shell'>
                <div className='shell-top'>
                    <div className='shell-left'>
                        <NavBar userData={userToken}></NavBar>
                    </div>
                </div>
                <div className='shell-bottom'>
                    <div className='shell-leftNav'></div>
                    <div className='shell-body'><Outlet /></div>
                </div>
            </div>
        </>
    } else {
        return <Navigate
            to={`/login/${location.search}`}
            replace
            state={{ location }} />
    }
}