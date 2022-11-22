import React from 'react';
import { useGetPostsQuery } from '../../features/posts/postsAPI';
import Blog from './Blog';

const Blogs = () => {

    const { data: blogs, isError, isLoading, error } = useGetPostsQuery();

    // let decide content 
    let content = null;
    if (isLoading) content = <div>loading...</div>;

    if (!isLoading && isError) content = <div>error...</div>;

    if (!isLoading && !isError && (blogs?.length === 0)) content = <div>blog not found...</div>;

    if (!isLoading && !isError && (blogs?.length > 0)) {
        content = blogs
            // .filter(blog => blog.title.toLowerCase().search(keyword.trim().toLowerCase()) > -1)
            // .filter(filterByCategory)
            // .filter(filterByAuthor)
            .map((blog, index) => (
                <Blog key={blog.id} blog={blog} />
            ))
    }

    console.log("error", error)
    return (
        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
            <div className="relative max-w-7xl mx-auto">

                {/* <!-- card grid  --> */}
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {
                        content
                    }

                </div>
            </div>
        </section>
    );
};

export default Blogs;