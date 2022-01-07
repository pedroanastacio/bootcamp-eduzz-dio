import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { convertToReal } from '../../../commons/utils/currency';
import * as S from './style';
import {
	Typography,
	Grid,
	CardActionArea,
} from '@mui/material';

const ProductCard = ({ data }) => {

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<S.WrapperCard>
				<CardActionArea>
					<div className='card-media'>
						<S.WrapperCardMediaContent
							component='img'
							image={`${data.image}`}
							alt={`${data.name}`}
						/>
					</div>
					<S.WrapperCardContent>
						<div className='card-info'>
							<Typography color='secondary' fontSize={22}>
								{data.name}
							</Typography>
							<Typography color='primary.light' fontSize={30}>
								{convertToReal(data.price)}
							</Typography>
							{/* <Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							height: '100%',
							justifyContent: 'flex-end'
						}}
					>
						<Typography fontSize={15} color="secondary.light">
							Quantidade:
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
							<Box sx={{ mb: 2 }}>
								<IconButton>
									<IndeterminateCheckBoxOutlined color='secondary.light' />
								</IconButton>
								<TextField size='small' sx={{ width: 60 }} />
								<IconButton>
									<AddBoxOutlined color='secondary.light' />
								</IconButton>
							</Box>
							<Button variant="contained">Adicionar ao carrinho</Button>
						</Box>
					</Box> */}
						</div>
					</S.WrapperCardContent>
				</CardActionArea>
			</S.WrapperCard >
		</Grid >
	);
};

ProductCard.propTypes = {
	data: PropTypes.object
};

export default memo(ProductCard);