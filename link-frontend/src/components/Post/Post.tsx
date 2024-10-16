import React, { useState } from 'react';
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
import axios from 'axios';
import Cookies from "js-cookie";

const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(2),
    boxShadow: 'none',
    borderRadius: '8px',
}));

const IconLabel = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: theme.spacing(1),
}));

const Post = () => {
    const [postContent, setPostContent] = useState(''); // State to hold post content
    const [error, setError] = useState<string | null>(null);

    const [token, setToken] = useState<string | null>(() => {
        // Get the token from cookies if it exists
        return Cookies.get("jwtToken") || null;
    });

    const [userId, setUserId] = useState<string | null>(() => {
        // Get the token from cookies if it exists
        return Cookies.get("userId") || null;
    });

    const [email, setEmail] = useState<string | null>(() => {
        // Get the token from cookies if it exists
        return Cookies.get("email") || null;
    });

    // Function to handle form submission
    const handleSubmit = async () => {
        try {
            // Construct the post data
            const postData = {
                "postContent": postContent,           // This should come from your input field or editor
                "posterEmail": email,                 // Replace with actual user name if available
                "posterId": userId,                 // Replace with actual user name if available
            };
            console.log(postData)
            // Make the POST request to your API
            const response = await axios.post(`${process.env.REACT_APP_API_URL}api/posts/`, postData, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Pass token if needed
                },
            });

            console.log('Post created successfully:', response.data);
            setPostContent(''); // Clear the input field after successful post
            window.location.reload();
        } catch (error) {
            console.error('Error creating post:', error);
            setError('Failed to create post!');
        }
    };

    return (
        <StyledCard>
            <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: 'blue' }}>R</Avatar> {/* Change color or initial as needed */}
                <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    placeholder="What's on your mind?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)} // Handle text input
                    sx={{
                        ml: 2,
                        border: 'none',
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

            {error && <Typography color="error">{error}</Typography>}

            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit} // Trigger the form submission
            >
                Post
            </Button>
        </StyledCard>
    );
};

export default Post;
