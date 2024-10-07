
import * as React from 'react';
import MessageIcon from '@mui/icons-material/Message';
import { Box } from '@mui/material';

export default function NotificationsMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#eff3f6', // Set the background color
                    borderRadius: '10%', // Optional: Make it circular
                    width: 40, // Set a width for the box
                    height: 40, // Set a height for the box
                }}
            >
                <MessageIcon sx={{ fontSize: 18, color: 'black' }} /> {/* Adjust the size as needed */}
            </Box>

        </React.Fragment >
    );
}