import styled from 'styled-components';

export const WrapperHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 16px;

    ${props => props.theme.breakpoints.down('sm')} {
        flex-direction: column;
        align-items: flex-start;
    }
`;