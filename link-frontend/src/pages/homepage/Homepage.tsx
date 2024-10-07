import { useState, ChangeEvent, FormEvent } from 'react';

import AppBar from '../../components/appbar/AppBar';
import RecipeReviewCard from '../../components/card/Card';


const Homepage = () => {
    return (
        <>
            <AppBar />
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-4"> {/* Set a max-width for the grid container */}
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                </div>
            </div>


        </>
    );
};

export default Homepage;
