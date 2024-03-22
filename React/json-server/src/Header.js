import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import AddEmp from "./AddEmp"

function Header(){
    return(
        <div>
             <Link to='/'>Home</Link>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/addemp' element={<AddEmp/>}></Route>
            </Routes>

        </div>
    )
}
export default Header