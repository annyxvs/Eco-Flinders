import  imageFundo from '../../assets/fundo-home.png';

import styled from 'styled-components';

export const Fundo = styled.div`
    width: 100vw;
    
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageFundo});
    background-size: cover;
    background-repeat: no-repeat;

    background-attachment: fixed;
`
export const Main = styled.main`
    width: 100vw;
    height: 50vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    button{
        margin: 5rem;
        width: 150px;
    }
`
export const M2 = styled.main`
    width: 100vw;
    height: 15vh;
    background-color: #01200F;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color:  #01200F;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

    background-color: #CED9D7;

    justify-content: flex-start;
    width: 60vw;
    min-height: 35vh;
    border-radius: 0 0.4rem 0.4rem 0;

    font-family: 'Inter', sans-serif;

    h1::before{
        content: '|';
        color: black;
    }

    h1{
        font-size: 2.3rem;
        margin: 1rem;
    }

    p{
        margin: 1rem;
        font-size: 1.5rem;
    }

    div{
        margin-top: 2.5rem;
        margin-left: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        p{
            margin: 0.2rem;
        }

        button{
            border: none;
            background-color: transparent;
            cursor: pointer;
        }

        img{
            height: 2rem;
            width: 2rem;
        }
    }

`

export const Aside = styled.aside`
    background-color:  #01200F;

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        max-width: 22vw;
        max-height: 50vh;
    }
`