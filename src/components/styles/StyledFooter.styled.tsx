import styled from "styled-components"

export const StyledFooter = styled.footer`
    width: 100vw;
    background-color: #F8464A;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

export const TopContainer = styled.div`
    display: flex;
    margin: 40px 0 20px 20px;
    @media(max-width:420px){
        flex-direction: column;
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 50px;
    & > h4 {
        color: white;
        font-weight: 800;
        margin-bottom: 12px;
    }
    & > a {
        text-decoration: none;
        color: #E6E6E6;
        font-size: 16px;
        height: 32px;
        margin: 8px 0;
        transition: 0.2s ease-in-out;
        &:hover {
            border-bottom: 1px solid white;
        }
    }
    @media(max-width:1024px){
        margin: 0 40px;
        & > a {
            font-size: 15px;
        }
    }
    @media(max-width:420px){
        margin: 30px;
    }
`

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 20px 0 40px 70px;
    & > p {
        color: white;
    }
    img {
        margin: 0 10px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
            transform: scale(1.2);
        }
    }
    @media(max-width:1024px){
        margin: 20px 0 40px 60px;
    }
    @media(max-width:420px){
        flex-direction: column;
        align-items: flex-start;
        margin: 0 0 40px 40px;
        & > p {
            order: 2;
            margin: 40px 0 0 12px;
        }
    }
`