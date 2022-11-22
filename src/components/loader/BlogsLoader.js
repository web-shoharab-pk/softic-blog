import { Card, Col, Row, Skeleton } from 'antd';
import React from 'react';

const BlogsLoader = () => {
    return (
        <div style={{ padding: '30px' }}>

            <Row justify="center">
                {
                    [...new Array(6)].map(() => (
                        <Col
                            style={{ marginTop: '20px' }}
                            xs={{
                                span: 18,
                                offset: 1,
                            }}
                            lg={{
                                span: 6,
                                offset: 2,
                            }}>
                            <Card style={{ width: '300px' }}>
                                <Skeleton.Image active shape={"square"} size={"large"} style={{ width: '250px', height: '100px', marginBottom: '10px' }} />
                                <br />
                                <Skeleton.Input active shape={"square"} size={"default"} style={{ width: '250px', height: '50px', marginBottom: '10px' }} />
                                <br />
                                <Skeleton.Avatar active shape={"circle"} size={"large"} style={{ width: '35px', height: '35px', marginRight: '10px' }} />
                                <Skeleton.Button active shape={"square"} size={"large"} style={{ width: '200px', height: '35px' }} />
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default BlogsLoader;