import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box } from '@mui/material';

const paellaImage = require("./paella.jpg");

export default function ImgMediaCard() {
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 600, position: 'relative' }}>
            {/* CardMedia for image */}
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={paellaImage}
            />

            {/* Avatar on top of the image */}
            <Box sx={{
                position: 'absolute',
                top: 140, // Adjust position relative to the image
                left: '20%',
                transform: 'translateX(-50%)', // Center the avatar horizontally
                zIndex: 1,
            }}>
                <Avatar
                    sx={{ width: 80, height: 80, border: '3px solid white' }} // Avatar size and border
                    alt="Profile Picture"
                    src="/path-to-avatar-image.jpg" // Replace with your avatar image path
                />
            </Box>
            <CardContent sx={{ mt: 3 }}>
                <Typography gutterBottom variant="h5" component="div">
                    Ronel Dylan Joshua ....
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}