import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    justify-content: center;
    align-items: center;

    .api-image{
        width: 40vw;
        overflow: auto;
        img{
            max-width: 40vw;
            height: 80vh;
            border: 5px solid #CED9D7;
        }
    }
`

export const CardOne = styled.div`
    margin:2rem;
    margin-right: 0;
    width: 60vw;
    height: 80vh;

    background: #CED9D7;
    box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.9 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    color: black;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
    display: flex;
    align-items: center;
    margin: 1.5rem;

    font-size: 1rem;
    font-family: 'Inter', sans-serif;

    img{
        margin: 0.2rem;
        width: 2.5rem;
        height: 2.5rem;
    }

    .badge{
        width: 4rem;
        height: 4rem;
    }

    .name-animal{
        font-size: 1.5rem;
    }
`

