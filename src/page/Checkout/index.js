import { yupResolver } from '@hookform/resolvers/yup';
import { Col, message, Row } from 'antd';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Banner from '~/components/Banner';
import Container from '~/components/Container';
import config from '~/config';
import { clearAllCart } from '../Cart/cartSlice';
import styles from './Checkout.module.scss';
import CheckoutForm from './CheckoutForm';
import CheckoutSumary from './CheckoutSumary';

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
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

    const onSubmit = (data) => {
        console.log('onSubmit ~ data', data);
        //request data :))
        reset('');
        dispatch(clearAllCart());
        navigate(config.router.cart);
        message.success({
            content: `checkout successfuly! Thank for your order!`,
            style: {
                textTransform: 'capitalize',
            },
        });
        message.config({
            duration: 5,
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
