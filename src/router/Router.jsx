import { Route,Routes } from "react-router-dom"
import { Btn } from "../components/Btn/style"
import { Home } from "../pages/Home/Home"
import {Error} from '../pages/Error/Error'
import {Gallery} from '../pages/Gallery/Gallery'
import { Random } from "../pages/Random/Random"

export const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/random" element={<Random/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}