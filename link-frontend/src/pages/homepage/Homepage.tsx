import { useState, ChangeEvent, FormEvent } from 'react';

import AppBar from '../../components/NavBar/NavBar';
import RecipeReviewCard from '../../components/PostCard/PostCard';
import Post from '../../components/Post/Post';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import MediaControlCard from '../../components/MediaControlCard/MediaControlCard'
import ConnectCard from '../../components/ConnectCard/ConnectCard';
import FollowCard from '../../components/FollowCard/FollowCard';

const Homepage = () => {
    return (
        <>
            <AppBar />
            <div className="mx-auto max-w-7xl flex justify-center">
                <div className='flex flex-row mt-8'>
                    <div className="w-1/4 flex justify-start">
                        <ProfileCard />
                    </div>
                    <div className="w-2/4 flex flex-col justify-center items-center px-8 space-y-8">
                        <Post />
                        <RecipeReviewCard />
                        <RecipeReviewCard />
                        <RecipeReviewCard />
                        <RecipeReviewCard />
                        <RecipeReviewCard />
                    </div>
                    <div className="w-1/4 flex justify-end">
                        <div className='flex flex-col space-y-4'>
                            <MediaControlCard />
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
