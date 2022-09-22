import styled from "styled-components"

export const StyledMidStripe = styled.div`
    background-color: #F84646;
    width: 100vw;
    height: 40vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    @media(max-width:420px){
        height: 100vh;
    }
`
export const BGImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    mix-blend-mode: lighten;
    @media(max-width:420px){
        transform: rotate(90deg);
        width: 100vh;
        height: 600px;
    }
`

export const Description = styled.div`
    text-align: center;
    & > h2 {
        font-weight: 800;
        font-size: 48px;
    }
    & > p {
        font-size: 18px;
        margin-top: 15px;
    }
    @media(max-width:420px){
        margin-top: 50px;
        & > h2 {
            font-size: 36px;
        }
        & > p {
            font-size: 14px;
        }
    }
`

export const Steps = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    img {
        width: 32px;
        height: 32px;
        margin: 0 25px;
    }
    p {
        width: 170px;
        text-align: center;
    }
    @media(max-width:420px){
        flex-direction: column;
        margin-bottom: 50px;
        img {
            transform: rotate(90deg);
            margin: 25px 0;
        }
        p {
            font-size: 18px;
            width: 180px;
        }
    }
`