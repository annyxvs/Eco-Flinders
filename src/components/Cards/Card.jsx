import Badge from '../../assets/badge.svg'
import Latim from '../../assets/subtitles.svg'
import Habitat from '../../assets/habitat.png'
import Dieta from '../../assets/dieta.png'

import * as S from './style'

export const Card = (props) =>{
    return(
        <S.Card>

            <div className='api-image'>
                <img className='apiimage' src={props.animal.image_link} alt={props.animal.name} />
            </div>

            <S.Content>
                <img src={Badge} alt="Icon Badge" />
                <p>Nome: {props.animal.name}</p>
            </S.Content>

            <S.Content>
                <img src={Latim} alt="Icon Translate" />
                <p>Nome em latim: {props.animal.latin_name}</p>
            </S.Content>

            <S.Content>
                <img src={Habitat} alt="Icon Habitat" />
                <p>Habitat Natural: {props.animal.habitat}</p>
            </S.Content>

            <S.Content>
                <img src={Dieta} alt="Icon Dieta" />
                <p>Dieta: {props.animal.diet}</p>
            </S.Content>
        </S.Card>
    )
}