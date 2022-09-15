import { Col, Row } from 'antd';
import React from 'react';
import InputField from '~/components/InputField';
import classNames from 'classnames/bind';
import styles from '.././Checkout.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
import Button from '~/components/Button';
import * as yup from 'yup';

const cx = classNames.bind(styles);
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup
    .object({
        firstName: yup.string().required('please enter your first name'),
        lastName: yup.string().required('please enter your last name'),
        email: yup.string().email('please enter right format').required('please enter your email'),
        phoneNumber: yup
            .string()
            .required('please enter your phone number')
            .matches(phoneRegExp, 'Phone number is not valid'),
        country: yup.string().required('please enter your country'),
        address: yup.string().required('please enter your address'),
    })
    .required();

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
