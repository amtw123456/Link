import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';

const paellaImage = require("./paella.jpg");

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

interface PostCardProps {
    id: string;
    userId: string;
    content: string;
    email: string;
}


const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

const ITEM_HEIGHT = 24;

const PostsCard: React.FC<PostCardProps> = ({ id, userId, content, email }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleDelete = () => {
        deletePostById()
        window.location.reload();
        setAnchorEl(null);
    };

    const handleUpdate = () => {
        deletePostById()
        window.location.reload();
        setAnchorEl(null);
    };

    const deletePostById = async () => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}api/posts/${id}`, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get("jwtToken")}`, // Pass token if needed
                },
            });

            // Handle success response
            if (response.status === 200) {
                console.log("Post deleted successfully");
                // You can also trigger a success notification or state update here
            }

        } catch (err: any) { // Make sure 'err' can be typed properly in TypeScript
            if (axios.isAxiosError(err)) {
                // Axios-specific error handling
                if (err.response) {
                    // Server responded with a status other than 2xx
                    console.error(`Error: ${err.response.status} - ${err.response.data}`);
                    alert(`Error: ${err.response.status} - ${err.response.data.message || 'Failed to delete post.'}`);
                } else if (err.request) {
                    // No response was received from the server
                    console.error('No response received from the server:', err.request);
                    alert('No response received from the server. Please try again.');
                } else {
                    // Something went wrong during request setup
                    console.error('Error setting up request:', err.message);
                    alert(`Request error: ${err.message}`);
                }
            } else {
                // Non-Axios error handling
                console.error('An unexpected error occurred:', err);
                alert('An unexpected error occurred. Please try again.');
            }
        }
    };


    return (
        <Card sx={{ width: '100%' }} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <div>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}

                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
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
                        >
                            <MenuItem onClick={handleDelete}>Delete</MenuItem>
                            <MenuItem onClick={handleUpdate}>Update</MenuItem>
                        </Menu>
                    </div>


                }

                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={paellaImage}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp, and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt, and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </ Card>

    );
}

export default PostsCard;
