import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

export default function FeedBar() {
    const navigate = useNavigate(); // Create a navigate function

    const handleClick = () => {
        navigate('/homepage'); // Change the route to "/feed" when button is clicked
    };

    return (
        <Button
            variant="outlined"
            sx={{
                paddingX: 12,
                transition: 'border-radius 0.3s ease',
                '&:hover': {
                    // borderRadius: '10%',
                },
            }}
            onClick={handleClick} // Call handleClick when button is clicked
        >
            Feed
        </Button>
    );
}
