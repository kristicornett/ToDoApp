import { Route, Routes } from 'react-router-dom'

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path='/' element={
                <>
                <h1>To Do List</h1>
                
                
               
                </>
            } />
            <Route path='completed' element={<></>} />
        </Routes>
    )
}