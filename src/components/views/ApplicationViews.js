import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth/Login'
import { Register } from '../auth/Register'
import { Authorized } from './Authorized'
import { Home } from './Home'

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login /> } />
            <Route path='/register' element={<Register /> } />
            <Route element={<Authorized />} >
                <Route path="/" element={<Home></Home>} />
             
            </Route>
        </Routes>
    )
}