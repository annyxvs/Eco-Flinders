import styled from 'styled-components';

export const Random = styled.div`
    background-color: #01200F;

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .btns{
        width: 100vw;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Button = styled.button`
    margin: 0.5rem;

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    border: none;

    background-color: #4B5842;
    color: #ffff;

    font-size: 1rem;
    padding: 1rem;

    border-radius: 0.5rem;
    transition: 1s;
    cursor: pointer;

    &:hover{
        background-color: #727B69;
        transform: scale(1.2);
    }
`