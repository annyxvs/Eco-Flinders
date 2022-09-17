import mamaco from '../../assets/mamaco.gif'

import * as S from './style'

export const Loading = () =>{
    return(
        <S.Loading>
            <img src={mamaco} alt="" />
            <p>Loading...</p>
        </S.Loading>
    )
}