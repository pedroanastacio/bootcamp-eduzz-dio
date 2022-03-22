import React from 'react';
import { Typography, Popover } from '@mui/material';

type Props = {
    anchor: HTMLButtonElement | null,
    setAnchor: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>
}

const UserPopover: React.FC<Props> = ({ anchor, setAnchor }) => {

	const handleClose = () => {
		setAnchor(null);
	};

	const open = Boolean(anchor);
	const id = open ? 'simple-popover' : undefined;

	return (
		<Popover
			id={id}
			open={open}
			anchorEl={anchor}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
		>
			<Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
		</Popover>
	);
};

export default UserPopover;