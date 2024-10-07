import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EventIcon from '@mui/icons-material/Event';
import Typography from '@mui/material/Typography';

const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(2),
    boxShadow: 'none', // Optional: Remove shadow for a flat look
    borderRadius: '8px', // Optional: Adjust border radius
}));

const IconLabel = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: theme.spacing(1),
}));

const PostCard = () => {
    return (
        <StyledCard>
            <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: 'blue' }}>R</Avatar> {/* Change color or initial as needed */}
                <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    placeholder="What's on your mind?"
                    sx={{
                        ml: 2,
                        border: 'none', // No borders
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: 'none',
                            },
                        },
                    }}
                />
            </Box>
            <Box display="flex" justifyContent="space-around" mb={2}>
                <IconLabel>
                    <IconButton color="primary">
                        <PhotoIcon />
                    </IconButton>
                    <Typography variant="caption">Photo</Typography>
                </IconLabel>
                <IconLabel>
                    <IconButton color="primary">
                        <VideoCameraBackIcon />
                    </IconButton>
                    <Typography variant="caption">Video</Typography>
                </IconLabel>
                <IconLabel>
                    <IconButton color="primary">
                        <EventIcon />
                    </IconButton>
                    <Typography variant="caption">Event</Typography>
                </IconLabel>
            </Box>
            <Button variant="contained" color="primary" fullWidth>
                Post
            </Button>
        </StyledCard>
    );
};

export default PostCard;
