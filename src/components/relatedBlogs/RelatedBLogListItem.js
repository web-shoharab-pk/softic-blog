import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAuthorQuery } from '../../features/author/authorAPI';
import { useGetPhotoQuery } from '../../features/photos/photoAPI';

const RelatedBLogListItem = ({ blog }) => {
    const { title, userId, id } = blog || {};
    const { data: blogImage } = useGetPhotoQuery(id);
    const { data: author } = useGetAuthorQuery(userId)

    return (
        <div className="w-full flex flex-row gap-2 mb-4">
             
            <div
                className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
            >
                <Link to={`/blog/${id}`}>
                    <img
                        src={blogImage?.thumbnailUrl}
                        className="object-cover  w-full h-full"
                        alt={""}
                    />
                </Link>
            </div>

            <div className="flex flex-col w-full">
                <Link to={`/blog/${id}`}>
                    <p
                        className="text-slate-900 text-sm font-semibold"
                    >
                        {(title)?.slice(0, 50)}...
                    </p>
                </Link>
                <p
                    className="text-gray-400 text-sm mt-2 hover:text-gray-600"
                >
                    {author?.name}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                    {6} Comments
                </p>
            </div>
        </div>
    );
};

export default RelatedBLogListItem;