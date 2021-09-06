import styled, { ThemeProvider } from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 15px;
    margin-right: auto;
    margin-left: auto;
    border: 3px solid ${props => props.theme.borderColor};
    background-color:${props => props.theme.bgColor}
`;