import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import Container from '~/components/Container';
import tempData from '~/tempData';
import style from './CategoriesBaner.module.scss';
import CategoriesBanerItem from './CategoriesBanerItem';

const cx = classNames.bind(style);

function CategoriesBaner() {
    return (
        <Container>
            <Row style={{ margin: '0 -10px' }}>
                <Col xs={24} md={12}>
                    <CategoriesBanerItem
                        img={tempData.categories[0].img}
                        vertical
                        subTitle="Trending now"
                        title={tempData.categories[0].title}
                        btnContent="DISCOVER NOW"
                    />
                </Col>
                <Col xs={24} md={12}>
                    <Row>
                        <Col xs={24}>
                            <CategoriesBanerItem
                                img={tempData.categories[1].img}
                                title={tempData.categories[1].title}
                                subTitle="Limited only"
                                btnContent="SHOP NOW"
                            />
                        </Col>
                        <Col xs={24}>
                            <CategoriesBanerItem
                                img={tempData.categories[2].img}
                                subTitle="This Week we love..."
                                title={tempData.categories[2].title}
                                btnContent="DISCOVER NOW"
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default CategoriesBaner;
