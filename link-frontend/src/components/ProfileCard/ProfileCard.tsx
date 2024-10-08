import * as React from 'react';
import { Card, CardContent, CardMedia, Avatar, Typography, Button, Box, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, People, Notifications, Event, Group, Settings } from '@mui/icons-material';

const bannerImage = "https://via.placeholder.com/345x100"; // Placeholder banner image
const avatarImage = "https://via.placeholder.com/100"; // Placeholder avatar image

const ProfileCard: React.FC = () => {
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 800, borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
            {/* Banner Image */}
            <CardMedia
                component="img"
                alt="User banner"
                height="100"
                image={bannerImage} // Banner image path
            />

            {/* Avatar */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: -6 }}>
                <Avatar
                    sx={{ width: 100, height: 100, border: '4px solid white' }}
                    alt="User Avatar"
                    src={avatarImage} // Avatar image path
                />
            </Box>

            <CardContent sx={{ textAlign: 'center' }}>
                {/* Name and Title */}
                <Typography variant="h6" fontWeight="bold">
                    John Doe
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Software Engineer at Example Corp
                </Typography>

                {/* Bio */}
                <Typography variant="body2" sx={{ mt: 2, color: 'gray' }}>
                    Passionate about coding, technology, and coffee. Always learning, always building.
                </Typography>

                {/* Stats */}
                <Box display="flex" justifyContent="space-around" mt={2}>
                    <Box textAlign="center">
                        <Typography fontWeight="bold">256</Typography>
                        <Typography variant="body2" color="textSecondary">Posts</Typography>
                    </Box>
                    <Box textAlign="center">
                        <Typography fontWeight="bold">2.5K</Typography>
                        <Typography variant="body2" color="textSecondary">Followers</Typography>
                    </Box>
                    <Box textAlign="center">
                        <Typography fontWeight="bold">365</Typography>
                        <Typography variant="body2" color="textSecondary">Following</Typography>
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Navigation Links */}
                <List component="nav">
                    <ListItemButton>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Feed" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary="Connections" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Notifications />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Event />
                        </ListItemIcon>
                        <ListItemText primary="Events" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </List>

                <Divider sx={{ my: 2 }} />

                {/* View Profile Button */}
                <Button variant="contained" fullWidth sx={{ textTransform: 'none' }}>
                    View Profile
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProfileCard;
