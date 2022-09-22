import styled from "styled-components"

export const StyledRef = styled.div`
    width: 100vw;
    background: #F4F5F7;
`

export const RefTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    & > h2 {
        font-weight: 800;
        font-size: 48px;
        line-height: 64px;
    }
    & > p {
        font-size: 18px;
        line-height: 32px;
    }
    @media(max-width:420px){
        & > h2 {
            font-size: 36px;
            line-height: 42px;
        }
        & > p {
            font-size: 14px;
        }
    }
`

export const Refs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    .ref-col {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 10px;
        .ref-container {
            background-color: white;
            border-radius: 15px;
            width: 170px;
            height: 96px;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
            cursor: pointer;
            transition: 0.2s ease-in-out;
            &:hover {
                transform: scale(1.1);
                box-shadow: 0px 5px 15px 0px #000;
            }
            & > p {
                color: #F84646;
                margin-right: 10px;
                transition: 0.2s ease-in-out;
                &:hover {
                    font-size: 18px;
                    font-weight: 800;
                }
            }
        }
    }
    @media(max-width:420px){
        flex-direction: column;
        #last-ref {
            order: 2;
        }
    }
`