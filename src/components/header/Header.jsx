import imglogo  from '../../assets/logo.svg'
import * as S from './style'

import {Btn} from '../Btn/Btn'

export const Header = () => {
    return(
            <S.Header>
                <S.Logo>
                    <img src={imglogo} alt="Logo"/>
                </S.Logo>

                <nav>
                    <Btn title='Gerador' route='/random'/>
                    <Btn title='Galeria' route='/gallery'/>
                </nav>
            </S.Header>
    )
}