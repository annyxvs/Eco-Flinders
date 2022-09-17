import { Link } from 'react-router-dom'
import * as S from './style'

export const Btn = ({title, route}) =>{
    return(
        <S.Btn><Link to={route}>{title}</Link></S.Btn>
    )
}