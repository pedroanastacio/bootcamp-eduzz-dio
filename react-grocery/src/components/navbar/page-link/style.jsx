import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperLink = styled(Link)`
    .text {
         font-weight: ${props => props.match ? 'bold' : '500' };
        color: ${props => props.match ? props.theme.palette.secondary.contrastText : props.theme.palette.primary.contrastText };
        font-size: 1.1em;

        &:hover, &:focus  {
            color: ${props => props.theme.palette.secondary.contrastText};
            font-weight: bold;
            cursor: pointer;
        }
    }
    
    padding: 2px 5px;
    margin-left: 15px;
`;

