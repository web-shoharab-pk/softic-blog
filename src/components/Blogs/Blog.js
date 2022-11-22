import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiSlice } from '../../features/api/apiSlice';
import { useGetAuthorQuery } from '../../features/author/authorAPI';
import { useGetCommentsQuery } from '../../features/comments/commentsAPI';
import { useGetPhotoQuery } from '../../features/photos/photoAPI'; 
import commentsIcon from './../../assets/comments.png';
import deleteIcon from './../../assets/delete.svg';

const Blog = ({ blog }) => {

    const dispatch = useDispatch();

    const { data: author } = useGetAuthorQuery(blog?.userId)
    const { data: comments } = useGetCommentsQuery(blog?.id);

    const { data: blogImage } = useGetPhotoQuery(blog?.id);
    const { data: authorImage } = useGetPhotoQuery(author?.id);
 

    const {search} = useSelector(state => state.search);
    
    let searchKey = `?_limit=${21}`;
    if(search) {
        searchKey = `?title_like=${search}&_limit=${21}`;
    }

    const handleDelete = (id) => {
        dispatch(apiSlice.util.updateQueryData("getPosts", searchKey, (draftPosts) => {
            return draftPosts.filter(p => p.id.toString() !== id.toString())
        }))
    }
    
    return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    loading='lazy'
                    className="h-48 w-full object-cover"
                    src={blogImage?.thumbnailUrl}
                    alt=""
                />
            </div>
            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <div className='flex justify-between items-center'>

                        <p className="text-sm font-medium text-indigo-600 cursor-pointe">
                            <span
                                //  onClick={() => handleCategoryFilter(blog.category)}
                                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                                <img className='w-4 h-4 mr-2' src={commentsIcon} alt="" />
                                {comments?.length || 0} comments
                            </span>
                        </p>
                        <div>
                            <img onClick={() => handleDelete(blog?.id)} className='w-6 h-6  cursor-pointer p-1 rounded-full font-medium bg-red-300 ' src={deleteIcon} alt="deleteIcon" />

                        </div>
                    </div>
                    <Link to={`/blog/${blog?.id}`} className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {blog.title}
                        </p>
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            //  onClick={() => handleAuthorFilter(blog.author)}  
                            className="h-10 w-10 rounded-full cursor-pointe"
                            src={authorImage?.url}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            //   onClick={() => handleAuthorFilter(blog.author)}  
                            className="text-sm font-medium text-gray-900 hover:underline cursor-pointe"
                        >
                            {author?.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;