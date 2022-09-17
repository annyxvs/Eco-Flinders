import styled from 'styled-components';

export const Cards = styled.div`
    margin: 1rem;
    width: 80vw;
    height: auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
`

export const Gallery = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #01200F ;
    button{
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
        font-family: 'Inter', sans-serif;

        text-transform: uppercase;
        font-weight: bold;

        margin: 1rem;
        padding: 1.5rem;
        border: none;

        border-radius: 0.3rem;
        background-color: #727B69;

        font-size: 1rem;

        cursor: pointer;

        transition: 1s;

        &:hover{
            background-color: #CED9D7;
        }
    }
`