import { Card, Skeleton } from 'antd';
import React from 'react';

const BlogDetailsLoader = () => {
    return (
        <div className='col-span-full w-full space-y-8 lg:col-span-2'>

        <Card> 
            <Skeleton.Image active shape={"square"} size={"large"} style={{ width: '50vw', height: '400px', marginBottom: '10px',   }} />
            <br />
            <Skeleton.Input active  style={{width: '50vw', height: '50px'}}  shape={"square"} size={"large"} />
            <br />
            <br />
            <Skeleton.Input active  style={{width: '50vw', height: '150px'}}  shape={"square"} size={"large"} />
        </Card>
        </div>
    );
};

export default BlogDetailsLoader;