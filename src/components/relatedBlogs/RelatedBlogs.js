import React from 'react';
import { useGetPostByAuthorQuery } from '../../features/posts/postsAPI';
import RelatedBlogLoader from '../loader/RelatedBlogLoader';
import RelatedBLogListItem from './RelatedBLogListItem';

const RelatedBlogs = ({ authorId }) => {

    const { data: relatedBlogs, isLoading, isError, error } = useGetPostByAuthorQuery(authorId);

    let content = null;

    if (isLoading) content = <RelatedBlogLoader />

    if (!isLoading && isError) content = <div>{error}</div>

    if (!isLoading && !isError && (relatedBlogs?.length === 0)) content = <div>Related Blogs not found</div>
    
    if (!isLoading && !isError && (relatedBlogs?.length > 0)) {
        content = relatedBlogs?.map((blog) => (
            <RelatedBLogListItem key={blog?.id} blog={blog} />
        ))
    }



    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >

            {content}
        </div>
    );
};

export default RelatedBlogs;