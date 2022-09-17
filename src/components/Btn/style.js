import styled from 'styled-components';


export const Btn = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
    a{
        text-decoration: none;
        color: #FFFFFF;

        &:hover{
            color: #01200F;
        }
    }

    margin: 1.2rem;
    border: none;

    text-transform: uppercase;
    color: #FFFFFF;
    padding: 0.8rem;
    border-radius: 5px;

    font-size:1rem;
    font-weight: bold;
    font-family: 'Inter', sans-serif;

    background-color: #01200F;
    cursor: pointer;

    transition: 1s;

    &:hover{
        background-color: #FFFFFF;
        color: #01200F;
    
        transform: scale(1.2);
    }
`