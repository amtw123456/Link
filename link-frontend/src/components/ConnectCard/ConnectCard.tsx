import * as React from 'react';
import { Card, CardContent, Avatar, Typography, Button, CardActions, Box } from '@mui/material';
import { blue } from '@mui/material/colors';

const ConnectCard = () => {
    return (
        <Card sx={{ maxWidth: 345, p: 2, borderRadius: 2, boxShadow: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Avatar */}
                <Avatar
                    sx={{ width: 64, height: 64, mr: 2, bgcolor: blue[500] }} // Blue background for the avatar
                    alt="John Doe"
                    src="/path-to-avatar-image.jpg" // Replace with your image path
                />
                {/* Name and Title */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        John Doe
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Full Stack Developer
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Google Inc.
                    </Typography>
                </Box>
            </Box>

            {/* Description / Summary */}
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    Experienced in building full-stack web applications using React, Node.js, and MongoDB. Passionate about solving problems with technology.
                </Typography>
            </CardContent>

            {/* Actions: Connect / Message */}
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                    size="small"
                    variant="contained"
                    sx={{
                        backgroundColor: '#0a66c2', // LinkedIn blue
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#004182', // Darker on hover
                        },
                    }}
                >
                    Connect
                </Button>
                <Button size="small" variant="outlined" color="primary">
                    Message
                </Button>
            </CardActions>
        </Card>
    );
};

export default ConnectCard;
