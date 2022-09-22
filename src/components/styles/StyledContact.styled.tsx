import styled from "styled-components"

export const StyledContact = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContactContainer = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > div {
        position: relative;
        width: 120px;
        height: 120px;
    }
    & > h2 {
        font-weight: 800;
        font-size: 48px;
    }
    & > p {
        text-align: center;
        font-size: 18px;
        line-height: 32px;
        margin: 10px 0 20px 0;
    }
    & > button {
        font-size: 24px;
        border: none;
        border-radius: 8px;
        width: 200px;
        padding: 15px 0;
        background-color: #F84646;
        color: white;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 2px 5px 0px #000000;
        }
    }
    @media(max-width:420px){
        width: 90%;
    }
`