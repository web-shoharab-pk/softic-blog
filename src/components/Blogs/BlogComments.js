import React from 'react';
import { useGetCommentsQuery } from '../../features/comments/commentsAPI';

const BlogComments = ({ blogId }) => {

    const { data: comments } = useGetCommentsQuery(blogId);
    console.log("comments", comments)
    return (
        <div>

            <p
                className="text-lg font-medium text-gray-900 "
            >
                {comments?.length || 0}   Comments
            </p>

            {
                comments?.map((com, i) => (
                    <div className='ml-6 mt-6'>
                        <p
                            className="text-md font-medium text-gray-900 "
                        >
                            {com?.name} 
                        </p>

                        <p
                            className="text-sm font-small text-gray-400 "
                        >
                            April 3, 2022 at 7:06 am
                        </p>
                        <p
                            className="text-sm font-small text-black  "
                        >
                            {com?.body}
                        </p>
                    </div>
                ))
            }

        </div>
    );
};

export default BlogComments;