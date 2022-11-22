import React from 'react'; 
import Blogs from '../components/Blogs/Blogs';
import Header from '../components/Header/Header';
import { useGetPostsQuery } from '../features/posts/postsAPI';

const Home = () => {

 const {data} = useGetPostsQuery();
 console.log("data", data)
    return (
        <div>
         <Header />

         <Blogs />
        </div>
    );
};

export default Home;