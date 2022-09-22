import styled from "styled-components"

export const StyledHeader = styled.header`
    width: 100vw;
    height: 100vh;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    padding: 30px 100px;
    .menu-icon {
        display: none;
    }
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 60%;
        list-style: none;
        font-size: 14px;
        font-weight: 800;
        li {
            cursor: pointer;
            transition: 0.1s ease-in-out;
            &:hover {
                color: #F84646;
            }
        }
    }
    button {
        font-size: 14px;
        font-weight: 800;
        border: none;
        border-radius: 5px;
        background-color: #F84646;
        color: white;
        padding: 10px 20px;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 2px 5px 0px #000000;
        }
    }
    @media(max-width:1024px){
        & > ul {
            width: 80%;
            & > li {
                margin: 0 10px;
            }
        }
    }
    @media(max-width:420px){
        padding: 30px;
        justify-content: space-between;
        .menu-icon {
            display: block;
            &:hover ul {
                display: block;
            }
        }
        ul {
            display: none;
        }
    }
` 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    height: 400px;
    margin: 100px 0 0 120px;
    .home-title {
        font-size: 64px;
        font-weight: 800;
    }
    .home-text {
        font-size: 20px;
        font-weight: 400;
        line-height: 36px;
    }
    .input-container {
        background-color: white;
        border-radius: 8px;
        width: 70%;
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    input {
        font-size: 16px;
        padding-left: 15px;
        border: none;
        width: 65%;
        height: 60px;
        border: none;
        outline: none;
    }
    button {
        font-size: 16px;
        font-weight: 800;
        border: none;
        border-radius: 8px;
        width: 30%;
        background-color: #F84646;
        color: white;
        height: 60px;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 2px 5px 0px #000000;
        }
    }
    @media(max-width:1024px){
        width: 65%;
    }
    @media(max-width:420px){
        width: 90%;
        margin: 50px 20px;
        .home-title {
            font-size: 42px;
            text-align: center;
        }
        .home-text {
            font-size: 12px;
            line-height: 24px;
            text-align: center;
        }
        .input-container {
            width: 100%;
        }
    }
` 

export const Img = styled.img`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    @media(max-width:420px){
        opacity: 0.5;
        left: -380px;
        width: 1024px;
    }
` 