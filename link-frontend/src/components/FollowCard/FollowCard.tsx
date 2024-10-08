import * as React from 'react';
import { Avatar, Box, Button, Card, CardContent, Typography, Divider } from '@mui/material';

const profiles = [
    {
        name: 'BruntWork',
        title: 'Company • Staffing and Recruiting',
        avatar: '/path-to-avatar1.jpg', // Replace with actual image paths
    },
    {
        name: 'Rocelle Nathalie Ong',
        title: 'Data Science & Machine Learning',
        avatar: '/path-to-avatar2.jpg',
    },
    {
        name: 'Joie Luzuriaga',
        title: 'Talent Acquisition Officer @ RCBC | Recruitment, HR',
        avatar: '/path-to-avatar3.jpg',
    }
];

const FollowCard = () => {
    return (
        <Card sx={{ maxWidth: 345, p: 2, borderRadius: 2, boxShadow: 2 }}>
            <CardContent>
                {/* Title */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Add to your feed
                </Typography>
                {/* List of Profiles */}
                {profiles.map((profile, index) => (
                    <Box key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            {/* Avatar */}
                            <Avatar
                                sx={{ width: 48, height: 48, mr: 2 }}
                                alt={profile.name}
                                src={profile.avatar} // Replace with your image path
                            />
                            {/* Name and Title */}
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    {profile.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {profile.title}
                                </Typography>
                            </Box>
                        </Box>
                        {/* Follow Button */}
                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: 'none', // Keeps text capitalization normal
                                width: '100%', // Full-width button
                            }}
                        >
                            + Follow
                        </Button>
                        {/* Divider between profiles */}
                        {index < profiles.length - 1 && <Divider sx={{ my: 2 }} />}
                    </Box>
                ))}
                {/* View All Link */}
                <Typography
                    variant="body2"
                    color="primary"
                    sx={{ mt: 2, cursor: 'pointer', textAlign: 'center' }}
                >
                    View all recommendations →
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FollowCard;
