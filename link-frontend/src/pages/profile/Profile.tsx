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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <AppBar logout={logout} />
      <div className="mx-auto max-w-7xl justify-center">
        <div className="flex max-w flex-row mt-8 space-x-6">
          <div className="w-2/5 justify-start">
            <ProfileInformationCard email={email} numberOfPosts={postsData.length} />
          </div>
          <div className="w-3/5 flex-col justify-center items-center space-y-8">
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
        </div>
      </div>
    </>
  );
};

export default Profile;
