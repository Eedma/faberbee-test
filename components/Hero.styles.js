import styled from '@emotion/styled'

export const HeroContainer = styled.div`
    height: 85vh;
    width: 100vw;
    background-image: url('/static/hero.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`

export const HeroText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255,255,255, 0.9);
    padding: 2rem;
    border-radius: 1%;
`