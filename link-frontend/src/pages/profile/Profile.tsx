import { useState, ChangeEvent, FormEvent } from 'react';

import AppBar from '../../components/NavBar/NavBar';
import RecipeReviewCard from '../../components/PostCard/PostCard';
import Post from '../../components/Post/Post';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import MediaControlCard from '../../components/MediaControlCard/MediaControlCard'
import ConnectCard from '../../components/ConnectCard/ConnectCard';
import FollowCard from '../../components/FollowCard/FollowCard';
import ProfileInformationCard from '../../components/ProfileInformationCard/ProfileInformationCard';
import { useAuth } from '../../provider/AuthProvider';

const Profile = () => {
  const { logout } = useAuth();
  return (
    <>
      <AppBar logout={logout} />
      <div className="mx-auto max-w-7xl flex justify-center">
        <div className='flex flex-row mt-8'>
          <div className="w-2/5 justify-start">
            <ProfileInformationCard />
          </div>
          <div className="w-3/5 flex flex-col justify-center items-center px-8 space-y-8">
            <Post />
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
          </div>
        </div>
      </div>


    </>
  );
};

export default Profile;
