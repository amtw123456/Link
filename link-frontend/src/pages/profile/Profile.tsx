import { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import axios from "axios";

import AppBar from '../../components/NavBar/NavBar';
import PostsCards from '../../components/PostCard/PostCard';
import Post from '../../components/Post/Post';
import ProfileInformationCard from '../../components/ProfileInformationCard/ProfileInformationCard';
import { useAuth } from '../../provider/AuthProvider';

interface PostCardProps {
  _id: string;
  posterId: string;
  postContent: string;
  posterEmail: string;
}

const Profile = () => {
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
            'Authorization': `Bearer ${token}`, // Pass token if needed
          },
        });
        setPostsData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <AppBar logout={logout} />
      <div className="mx-auto max-w-7xl flex justify-center">
        <div className="flex flex-row mt-8">
          <div className="w-2/5 justify-start">
            <ProfileInformationCard />
          </div>
          <div className="w-3/5 flex-col justify-center items-center px-8 space-y-8">
            <Post />
            {postsData.map((post) => (
              <PostsCards
                key={post._id} // Assuming _id is the unique identifier for the post
                userId={post.posterId} // Using posterId for the user who made the post
                content={post.postContent}
                email={post.posterEmail} // Assuming there's a posterEmail field
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
