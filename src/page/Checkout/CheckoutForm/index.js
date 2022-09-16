import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import InputField from '~/components/InputField';
import styles from '.././Checkout.module.scss';

const cx = classNames.bind(styles);

export default function CheckoutForm({ register, errors }) {
    return (
        <div>
            <h3 className={cx('title')}>billing detail</h3>
            <div>
                <Row gutter={[{ xs: 0, md: 15, lg: 20 }]}>
                    <Col xs={24} md={12}>
                        <InputField
                            register={register}
                            label="fisrt name"
                            name="firstName"
                            isRequire
                            errors={errors}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <InputField
                            register={register}
                            label="last name"
                            name="lastName"
                            isRequire
                            errors={errors}
                        />
                    </Col>
                </Row>
                <InputField
                    register={register}
                    label="email"
                    name="email"
                    isRequire
                    errors={errors}
                />
                <InputField
                    register={register}
                    label="phone number"
                    name="phoneNumber"
                    isRequire
                    errors={errors}
                />
                <InputField
                    register={register}
                    label="company name (optional)"
                    name="comanyName"
                    errors={errors}
                />
                <InputField
                    register={register}
                    label="country"
                    name="country"
                    isRequire
                    errors={errors}
                />
                <InputField
                    register={register}
                    label="address"
                    name="address"
                    isRequire
                    errors={errors}
                />
                <InputField
                    register={register}
                    label="note (optional)"
                    name="note"
                    textaria
                    placeholder="Note about your order, etc..."
                    errors={errors}
                />
            </div>
        </div>
    );
}
