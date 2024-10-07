import { useState, ChangeEvent, FormEvent } from 'react';

import AppBar from '../../components/NavBar/NavBar';
import RecipeReviewCard from '../../components/Card/Card';
import Post from '../../components/Post/Post';


const Homepage = () => {
    return (
        <>
            <AppBar />
            <div className="flex justify-center">
                <div className="w-1/3 flex justify-start">
                    Red
                </div>
                <div className="w-1/3 flex flex-col justify-center items-center px-12">
                    <Post />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                </div>
                <div className="w-1/3 flex justify-end">
                    Red
                </div>
            </div>


        </>
    );
};

export default Homepage;
