import React from 'react';

const BlogDescription = ({ blog, author, authorImage }) => {

    const { title, body } = blog || {};
    return (
        <div>
            <h1
                className="text-lg font-semibold tracking-tight text-slate-800"
            >
                {title}
            </h1>
            <div
                className="pb-4 flex items-center space-between border-b"
            >
                <h2
                    className="text-sm leading-[1.7142857] text-slate-600 w-full"
                >
                    Published on {(new Date()).toDateString()}
                </h2>

            </div>
            <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full cursor-pointe"
                        src={authorImage?.url}
                        alt=""
                    />
                </div>
                <div className="ml-3">
                    <p className="text-gray-400 text-xs mt-1">
                        Author
                    </p>
                    <p
                        className="text-sm font-medium text-gray-900 hover:underline cursor-pointe"
                    >
                        {author?.name}
                    </p>

                </div>
            </div>
            <div
                className="mt-4 text-sm text-[#334155] dark:text-slate-400"
            >
                {body}
            </div>
        </div>
    );
};

export default BlogDescription;