import styled from "styled-components"

export const StyledHeader = styled.header``

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    padding: 30px 100px;
    font-family: 'Manrope', sans-serif;
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
        font-family: 'Manrope', sans-serif;
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
` 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    height: 400px;
    font-family: 'Manrope', sans-serif;
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
        font-family: 'Manrope', sans-serif;
        font-size: 16px;
        padding-left: 15px;
        border: none;
        width: 65%;
        height: 60px;
        border: none;
        outline: none;
    }
    button {
        font-family: 'Manrope', sans-serif;
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
` 

export const Img = styled.img`
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100wh;
` 