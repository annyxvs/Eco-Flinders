import Badge from '../../assets/badge.svg'
import Latim from '../../assets/subtitles.svg'
import Habitat from '../../assets/habitat.png'
import Dieta from '../../assets/dieta.png'
import Type from '../../assets/pets.svg'
import Travel from '../../assets/travel.svg'

import imgSol from '../../assets/sunny.svg'
import imgLua from '../../assets/moon.svg'

import * as S from './style'
import { useState } from 'react'

export const CardOne = (props) =>{

    const [time, setTime] = useState('')

    return(
       <S.Container>
            <S.CardOne>
                <S.Content>
                    <img src={Badge} alt="Icon Badge" className='badge' />
                    <p className='name-animal'>Nome: {props.animal.name}</p>
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

                <S.Content>
                    {props.animal.active_time == 'Diurnal' ? <img src={imgSol} alt="icon sunny"/> : <img src={imgLua} alt="icon moon"/> }
                    {props.animal.active_time}
                </S.Content>
                
                <S.Content>
                    <img src={Type} alt="Icon type animal" />
                    {props.animal.animal_type}
                </S.Content>
                
                <S.Content>
                    <img src={Travel} alt="Icon travel" />
                    {props.animal.geo_range}
                </S.Content>
            </S.CardOne>

            <div className='api-image'>
                <img className='apiimage' src={props.animal.image_link} alt={props.animal.name} />
            </div>
       </S.Container>
    )
}