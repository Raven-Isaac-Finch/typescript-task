import styled from "styled-components"

export const StyledExplanations = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 80px 0;
`
export const ExplanationsContainer = styled.div`
    width: 80%;
    height: 80%;
    display: grid;
    grid-template: auto auto / auto auto;
    gap: 100px;
    .exp-title {
        font-weight: 800;
        font-size: 64px;
        line-height: 76px;
    }
    .exp-text {
        font-size: 16px;
        color: #808080;
        line-height: 32px;
        margin: 50px 0; 
    }
    .exp-btn {
        font-weight: 800;
        border: none;
        border-radius: 8px;
        width: 150px;
        height: 48px;
        background-color: #F84646;
        color: white;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 2px 5px 0px #000000;
        }
    }
    img {
        width: 500px;
        height: 450px;
    }
    @media(max-width:1024px){
        width: 90%;
        grid-column-gap: 50px;
        grid-row-gap: 100px;
        .exp-title {
            font-size: 58px;
            line-height: 60px;
        }
        .exp-text {
            font-size: 14px;
            line-height: 28px;
            margin: 45px 0;
        }
        img {
            width: 400px;
            height: 400px;
        }
    }
    @media(max-width:420px){
        width: 90%;
        grid-template: auto auto auto auto / 335px;
        grid-column-gap: 0;
        grid-row-gap: 50px;
        .first-img {
            grid-row: 1 / 2;
        }
        .exp-title {
            font-size: 36px;
            line-height: 42px;
            text-align: center;
        }
        .exp-text {
            margin: 35px 0;
            text-align: center;
        }
        .exp-btn {
            width: 100%;
        }
        img {
            width: 335px;
            height: 312px;
        }
    }
`