import React from 'react';
import { useParams } from 'react-router-dom';
import BlogComments from '../components/Blogs/BlogComments';
import BlogDescription from '../components/Blogs/BlogDescription';
import BlogDetailsLoader from '../components/loader/BlogDetailsLoader';
import RelatedBlogs from '../components/relatedBlogs/RelatedBlogs';
import { useGetAuthorQuery } from '../features/author/authorAPI';
import { useGetPhotoQuery } from '../features/photos/photoAPI';
import { useGetPostByIdQuery } from '../features/posts/postsAPI';

const BlogDetails = () => {

    const { id } = useParams();

    const { data: blog, isLoading, isError, error } = useGetPostByIdQuery(id);

    const { data: author } = useGetAuthorQuery(blog?.userId)

    const { data: blogImage } = useGetPhotoQuery(blog?.id);
    const { data: authorImage } = useGetPhotoQuery(author?.id);

    // let decide what we want to show 
    let conetent = null;
    if (isLoading) conetent = <BlogDetailsLoader />;

    if (!isLoading && isError) conetent = <div>{error}</div>;

    if (!isLoading && !isError && blog) {
        conetent = <div className="col-span-full w-full space-y-8 lg:col-span-2">

            <img style={{ width: '100%', height: '400px' }} src={blogImage?.url} alt="" />

            <BlogDescription blog={blog} author={author} authorImage={authorImage} />

            <BlogComments blogId={blog?.id} />

        </div>;
    }



    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    {conetent}
                    <div>
                        <p
                            className="text-lg mb-4 font-medium text-gray-900 "
                        >
                            Same author blogs
                        </p>
                        <RelatedBlogs authorId={author?.id} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;