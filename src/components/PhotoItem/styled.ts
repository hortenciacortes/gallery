import styled from "styled-components";

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    div{
        /* height: 22px */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    div>svg{
        color: red;
    }
`;