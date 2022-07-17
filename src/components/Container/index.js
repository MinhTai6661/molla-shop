import { Col, Row } from 'antd';

function Container({ children, className, ...size }) {
    return (
        <Row className={className}>
            <Col style={{ margin: 'auto' }} {...size}>
                {children}
            </Col>
        </Row>
    );
}

export default Container;
