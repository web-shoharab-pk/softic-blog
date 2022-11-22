import { Skeleton, Space } from 'antd';
import React from 'react';

const RelatedBlogLoader = () => {
    return (
        <div>
            {
                [...new Array(4)].map((arg, i) => (
                    <Space key={i} style={{marginBottom: '20px'}}>
                        <Skeleton.Image style={{ width: "168px", height: "94px" }} active={true} />

                        <Skeleton.Node style={{ width: "200px", height: "54px" }} active={true} />
                    </Space>
                ))
            }
        </div>
    );
};

export default RelatedBlogLoader;