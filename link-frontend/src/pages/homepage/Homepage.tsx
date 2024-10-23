import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import NavBar from '../../components/NavBar/NavBar';
import RecipeReviewCard from '../../components/PostCard/PostCard';
import PostsCards from '../../components/PostCard/PostCard';
import Post from '../../components/Post/Post';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import MediaControlCard from '../../components/MediaControlCard/MediaControlCard'
import ConnectCard from '../../components/ConnectCard/ConnectCard';
import FollowCard from '../../components/FollowCard/FollowCard';
import SpotifyPlaylistCard from '../../components/SpotifyPlaylistCard/SpotifyPlaylistCard';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from '../../provider/AuthProvider';
import Cookies from "js-cookie";
import axios from 'axios';

interface PostCardProps {
    _id: string;
    posterId: string;
    postContent: string;
    posterEmail: string;
}

const Homepage = () => {
    const { logout } = useAuth();
    const [postsData, setPostsData] = useState<PostCardProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}api/posts/by-user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Pass token if needed
                    },
                });
                setPostsData(response.data);
            } catch (err) {
                console.error('Failed to fetch posts', err);
                setError(''); // Instead of displaying an error, set it to an empty string or handle it accordingly
            } finally {
                setLoading(false); // Ensure the loading state is updated
            }
        };

        fetchPosts();
    }, []);

    if (loading) return (
        <div className='flex justify-center items-center h-screen' >
            <CircularProgress size="120px" color="secondary" />
        </div>
    )
    if (error) return <p>{error}</p>;

    return (
        <>
            <NavBar logout={logout} />
            <div className="mx-auto max-w-7xl flex justify-center">
                <div className='flex flex-row mt-8'>
                    <div className="w-1/4 justify-start">
                        <ProfileCard email={email} numberOfPosts={postsData.length} />
                    </div>
                    <div className="w-2/4 flex-col justify-center items-center px-8 space-y-8">
                        <Post />
                        {postsData.map((post) => (
                            <PostsCards
                                key={post._id} // Assuming _id is the unique identifier for the post
                                id={post._id}
                                userId={post.posterId} // Using posterId for the user who made the post
                                content={post.postContent}
                                email={post.posterEmail} // Assuming there's a posterEmail field
                            />
                        ))}
                    </div>
                    <div className="w-1/4 flex justify-end">
                        <div className='flex flex-col space-y-4'>
                            <MediaControlCard />
                            {/* <SpotifyPlaylistCard /> */}
                            <ConnectCard />
                            <FollowCard />
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Homepage;
