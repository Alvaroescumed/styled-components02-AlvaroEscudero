import styled, { css } from 'styled-components';

export const Button = styled.button`
    background-color: transparent;
    border: 2px solid blue;
    color: blue;
    padding:  10px 20px 10px 20px;
    border-radius: 20px;

    &:hover{
        background-color:  lightblue;
    }
    &:focus{
        background-color:  darkblue;
        color: white;
    }

    ${props => props.succes && css`
        border-color: green;
        color: green;

        &:hover{
            background-color: lightgreen;
        }
        &:focus{
            background-color: darkgreen;
        }
    `}
    ${props => props.error && css`
        border-color: #dc4b32;
        color: #dc4b32;

        &:hover{
            background-color: #f09b9a;
        }
        &:focus{
            background-color: #771616;
        }
    `}
    ${props => props.warning && css`
        border-color: #E9BA28;
        color: #E9BA28;

        &:hover{
            background-color: #f9e9bb;
        }
        &:focus{
            background-color: #af870e;
        }
    `}
    ${props => props.info && css`
        border-color: #982cbc;
        color: #982cbc;

        &:hover{
            background-color: #d0abf2;
        }
        &:focus{
            background-color: #3f156c;
        }
    `}



`;
