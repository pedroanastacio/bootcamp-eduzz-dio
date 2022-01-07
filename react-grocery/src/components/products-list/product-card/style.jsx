import styled from 'styled-components';
import { Card, CardMedia, CardContent } from '@mui/material';

export const WrapperCard = styled(Card)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: .1em;

    .card-media {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: right;
        height: 100%;
    }
`;

export const WrapperCardMediaContent = styled(CardMedia)`
    width: 100%;
    max-width: 200px;
    padding: .2em;
    aspect-ratio: 1 / 1;
`;

export const WrapperCardContent = styled(CardContent)`
    flex: 1;
`;

