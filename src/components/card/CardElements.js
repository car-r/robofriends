import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #95dada;
    width: 265px;
    padding: 1em;
    border-radius: 1em;
    margin: 0 auto;

    &:hover {
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
    }
`

export const Image = styled.img`
    height: 180px;
    width: 180px;
    display: inline-block;
    margin: 0 auto;
`

export const CardName = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0;
`

export const CardNickName = styled.p`
    margin-bottom: 0;
  
`

export const Email = styled.p`
    font-size: 1rem;

`