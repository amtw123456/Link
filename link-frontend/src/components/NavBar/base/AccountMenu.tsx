import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Button, CardHeader } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

interface AccountMenuProps {
    logout: () => void;
}

export default function AccountMenu({ logout }: AccountMenuProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate(); // Create a navigate function

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        navigate('/profile'); // Change the route to "/feed" when button is clicked
    };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{
                            paddingX: 0,
                            paddingY: 0,
                            borderRadius: '90%', // Initially circular
                            transition: 'border-radius 0.3s ease', // Smooth transition for the change
                            '&:hover': {
                                borderRadius: '10%', // Turns into a rounded square on hover
                            },
                        }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{
                            width: 36,
                            height: 36,
                        }} variant="rounded">M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 48,
                                height: 48,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    onClick={handleClose}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent', // Keeps the background transparent on hover
                            color: 'inherit', // Keeps the text color the same on hover
                        },
                    }}
                >
                    <Avatar sx={{ bgcolor: red[500], width: 60, height: 60 }} aria-label="recipe">
                        R
                    </Avatar>

                    <CardHeader
                        title={
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                    paddingY: '0'
                                }}>
                                Lori Ferguson
                            </Typography>

                        }
                        subheader={
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '14px',
                                    color: 'gray',
                                }}>
                                Web Developer
                            </Typography>
                        }
                        sx={{ py: 0, px: 0 }}
                    />

                </MenuItem>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"// Full viewport height to center it vertically
                    paddingY={1}
                >
                    <Button
                        sx={{
                            backgroundColor: '#ece4f1',
                            color: '#6a0dad',
                            '&:hover': {
                                backgroundColor: '#4B0082', // Change to your desired hover color
                                color: 'white', // Change text color on hover if needed
                            },
                            textTransform: 'none', // Prevent text from being transformed to uppercase
                            paddingX: 7
                        }}
                        onClick={handleProfileClick}
                    >
                        View Profile
                    </Button>
                </Box>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    <Typography
                        sx={{
                            fontWeight: 500, // Font weight 500
                            fontSize: '16px', // Font size 15px
                            color: 'rgb(103, 106, 121)', // Text color gray
                        }}
                    >
                        Settings and Privacy
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <Typography
                        sx={{
                            fontWeight: 500, // Font weight 500
                            fontSize: '16px', // Font size 15px
                            color: 'rgb(103, 106, 121)', // Text color gray
                        }}
                    >
                        Logout
                    </Typography>
                </MenuItem>
            </Menu>
        </React.Fragment >
    );
}