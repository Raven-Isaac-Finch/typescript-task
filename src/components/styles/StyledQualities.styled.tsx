import styled from "styled-components"

export const StyledQualities = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 100vh;
    margin: auto;
    @media(max-width:1024px){
        height: auto;
        margin: 50px auto;
    }
    @media(max-width:420px){
        width: 90vw;
    }
`

export const TitleContainer = styled.div`
    & > h2 {
        font-size: 36px;
        font-weight: 800;
        text-align: center;
        margin: 30px 0;
    }
    & > p {
        font-size: 24px;
        text-align: center;
    }
    @media(max-width:420px){
        & > h2 {
            font-size: 24px;
        }
        & > p {
            font-size: 12px;
        }
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 25px;
    .detail {
        width: 300px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 15px;
        .img-container {
            position: relative;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            & > img {
                width: 60px;
                height: 60px;
            }
        }
        & > h4 {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 10px;
        }
        & > p {
            text-align: center;
            font-size: 18px;
            line-height: 28px;
        }
    }
    @media(max-width:420px){
        margin: 20px auto;
        .detail {
            width: 90%;
            margin: 15px 0;
        }
    }
`