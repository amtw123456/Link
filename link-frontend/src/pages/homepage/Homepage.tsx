import { useState, ChangeEvent, FormEvent } from 'react';

import NavBar from '../../components/NavBar/NavBar';
import RecipeReviewCard from '../../components/PostCard/PostCard';
import PostsCards from '../../components/PostCard/PostCard';
import Post from '../../components/Post/Post';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import MediaControlCard from '../../components/MediaControlCard/MediaControlCard'
import ConnectCard from '../../components/ConnectCard/ConnectCard';
import FollowCard from '../../components/FollowCard/FollowCard';
import SpotifyPlaylistCard from '../../components/SpotifyPlaylistCard/SpotifyPlaylistCard';
import { useAuth } from '../../provider/AuthProvider';
import Cookies from "js-cookie";

const Homepage = () => {
    const { logout } = useAuth();

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

    interface PostCardProps {
        userId: string;
        content: string;
        email: string;
    }

    const postsData: PostCardProps[] = [
        {
            userId: 'user1',
            content: 'This is my first post!',
            email: 'user1@example.com',
        },
        {
            userId: 'user2',
            content: 'Hello, world! Excited to share my journey.',
            email: 'user2@example.com',
        },
        {
            userId: 'user3',
            content: 'Just tried a new recipe. It was delicious!',
            email: 'user3@example.com',
        },
    ]

    return (
        <>
            <NavBar logout={logout} />
            <div className="mx-auto max-w-7xl flex justify-center">
                <div className='flex flex-row mt-8'>
                    <div className="w-1/4 justify-start">
                        <ProfileCard email={email} />
                    </div>
                    <div className="w-2/4 flex flex-col justify-center items-center px-8 space-y-8">
                        <Post />
                        {postsData.map((post) => (
                            <PostsCards
                                key={post.userId} // Use a unique key
                                userId={post.userId} // Use userId as post ID
                                content={post.content}
                                email={post.email}
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
