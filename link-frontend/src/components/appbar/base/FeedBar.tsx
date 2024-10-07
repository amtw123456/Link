import * as React from 'react';
import Button from '@mui/material/Button';


export default function FeedBar() {
    return (
        <Button
            variant="outlined"
            sx={{
                paddingX: 12,
                transition: 'border-radius 0.3s ease', // Smooth transition for the change
                '&:hover': {
                    // borderRadius: '10%', // Turns into a rounded square on hover
                },
            }} >
            Feed
        </Button>
    );
}