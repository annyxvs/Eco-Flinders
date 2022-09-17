import { Header } from "../../components/header/Header"
import {Btn} from '../../components/Btn/Btn'
import {Footer} from '../../components/footer/Footer'

import imglogo  from '../../assets/logo.svg'
import imgTree from '../../assets/tree.png'
import imgLoc from '../../assets/loc.png'

import * as S from './styles';
import { Router } from "../../router/Router"

export const Home = () =>{
    return(
        <S.Fundo>
            <Header/>
            <S.Main>
                <Btn title='Sobre nós ↓' route={S.Content}/>
            </S.Main>
            <S.M2>
                <img src={imglogo} alt="Logo ECO Flinders" />
            </S.M2>
            
            <S.Section>
                <S.Content>
                    <h1>  Tudo sobre ECO flinders</h1>
                    <p>O ECO flinders é uma instituição dedicada Montes Flinders são uma cordilheira na Austrália Meridional que se estende por mais de 350 km para norte do Golfo de Spencer. Toque em coalas e cangurus, veja crocodilos em ação e aprenda como proteger a vida selvagem na Austrália.</p>
                    <p>O ECO flinders faz grandes esforços para estabelecer padrões elevados no que diz respeito ao bem-estar e conservação dos animais e está localizado na Austrália.</p>

                    <div>
                        <button><img src={imgLoc} alt="Ícone de localização." /></button>
                        <p>Localização</p>
                    </div>
                </S.Content>
                <S.Aside>
                    <img src={imgTree} alt="" />
                </S.Aside>
            </S.Section>
            <Footer/>
        </S.Fundo>
    )
}