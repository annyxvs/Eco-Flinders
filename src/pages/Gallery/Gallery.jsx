import { useEffect, useState } from "react"
import {api} from '../../api/api';
import { Btn } from "../../components/Btn/Btn";
import { Card } from '../../components/Cards/Card'

import { useNavigate } from "react-router-dom";

import * as S from './style'
import { Loading } from "../Loading/Loading";

export const Gallery = () =>{
    const [animals,setAnimals] = useState([]);
    const [loading,setLoading] = useState(false)

    const handleClick = async () =>{
        setLoading(true)
        let response = await api.getAll();
        {setTimeout(() => {
            setLoading(false)
        }, 3000)}
        setAnimals(response)
    }

    return(
        <S.Gallery>
                <div className="btns">                
                    <button onClick={handleClick}>Galeria</button>
                    <Btn title='Voltar' route='/'/>
                </div>

                {loading && <Loading/>}

                <S.Cards>
                    {!loading && animals.map((animal,index) => (
                        <div key={index}>
                            <Card animal={animal} />
                        </div>
                    ))}
                </S.Cards>
        </S.Gallery>
    )
}