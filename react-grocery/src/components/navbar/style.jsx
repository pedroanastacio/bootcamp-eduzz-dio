import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    padding: 10px;
    background-color: ${props => props.theme.palette.primary.main};

    a {
        display: flex;
        width: fit-content;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .title {
        margin-left: 5px;
        padding-top: 5px;
        color: ${props => props.theme.palette.secondary.contrastText};
        font-size: 2.4em;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin-left: 50px;
        align-items: center;    
        list-style-type: none;
    }

    div {
        display: flex;
        flex-direction: row;
        width: fit-content;     
    }
`;

