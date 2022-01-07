import styled from 'styled-components';

export const WrapperLayout = styled.section`
    min-height: 100vh;
    min-width: 100vw;
`;

export const WrapperContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const WrapperContent = styled.div`
    ${props => props.theme.breakpoints.down('sm')} {
        width: 90%; 
    }

    width: 80%;
    max-width: 1200px;
    padding: 20px 0px;
`;