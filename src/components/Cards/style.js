import styled from 'styled-components';

export const Card = styled.div`
    margin:2rem;
    width: 23vw;
    height: 50vh;

    background: #CED9D7;
    box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.9 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    color: black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .api-image{
        margin: 0 auto;

        overflow: hidden;

        img{
            border-radius: 0.3rem;
            width: 20vw;
            height: 25vh;
        }

    }
`

export const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.3rem;

    font-size: 1rem;
    font-family: 'Inter', sans-serif;

    img{
        margin: 0.2rem;
        width: 2rem;
        height: 2rem;
    }
`

