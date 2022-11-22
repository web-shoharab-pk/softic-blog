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
                        <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-12 w-12 rounded-full cursor-pointe"
                                    src={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
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

                            </div>
                        </div>

                        <p
                            className="text-sm font-small text-black ml-12 mt-2 "
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