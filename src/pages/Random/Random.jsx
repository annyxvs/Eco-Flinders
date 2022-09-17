import { useState } from 'react'
import { api } from '../../api/api'
import {CardOne} from '../../components/CardOne/CardOne'

import {Loading} from '../Loading/Loading'
import {Btn} from '../../components/Btn/Btn'

import * as S from './style'

export const Random = () =>{
    const [animal,setAnimal] = useState([])
    const [loading,setLoading] = useState(false)

    const generateAnimal = async () =>{
        setLoading(true)
        let response = await api.getOne();
        {setTimeout(() => {
            setLoading(false)
        }, 3000)}
        setAnimal(response)
    }

    return(
        <S.Random>
            <div className='btns'>
                <S.Button onClick={generateAnimal}>GERAR UM ANIMAL</S.Button>
                <Btn title='Voltar' route='/'/>
            </div>

            {loading && <Loading/>}

            {!loading &&  <CardOne animal={animal}/>}
        </S.Random>
    )
}