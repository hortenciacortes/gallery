import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 20px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 20px;
`;

export const UploadForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;

    input[type=submit]{
        background-color: #756DF4;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover{
            opacity: .9;
        }
    }

    @media (max-width: 500px){
        justify-content: center;

        input[type=submit]{
            margin-top: 8px;
        }
    }
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji{
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
`;
