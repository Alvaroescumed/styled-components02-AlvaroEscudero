import { keyframes, styled } from "styled-components";

// creamos los frames de la animacion
const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`
// creamos la funcion
export const Rotate = styled.div`
    animation: ${rotate} 10s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    margin-left: 50vw;
`