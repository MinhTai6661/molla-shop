import React from 'react';
import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import CheckoutForm from './CheckoutForm';
import Container from '~/components/Container';
import { Col, Row } from 'antd';
import Sumary from '~/components/Sumary';
import Banner from '~/components/Banner';
import CheckoutSumary from './CheckoutSumary';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

export default function Checkout() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        resetField,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            country: '',
            address: '',
            comanyName: '',
            note: '',
        },
    });
    // console.log('Checkout ~ reset', reset);
    // console.log('Checkout ~ resetField', resetField);

    // console.log('Checkout ~ useForm', useForm());

    const onSubmit = (data) => {
        console.log('onSubmit ~ data', data);

        reset('');
    };
    return (
        <div className={cx('wrapper')}>
            <Banner title="checkout" />
            <form className={cx('content')} onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Row gutter={[{ xs: 0, md: 10, lg: 20 }, { xs: 0 }]}>
                        <Col xs={24} md={16}>
                            <CheckoutForm register={register} errors={errors} />
                        </Col>
                        <Col xs={24} md={8}>
                            <CheckoutSumary />
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
    );
}
