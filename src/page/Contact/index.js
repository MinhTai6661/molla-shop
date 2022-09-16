import { Col, message, Row } from 'antd';
import classNames from 'classnames/bind';
import Container from '~/components/Container';
import InputField from '~/components/InputField';
import styles from './Contact.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '~/components/Button';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup
    .object({
        name: yup.string().required('please enter your  name'),
        email: yup.string().email('please enter right format').required('please enter your email'),
        phoneNumber: yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('please enter your phone number'),
        message: yup.string().required('please enter your message'),
    })
    .required();

function ContactPage() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { name: '', email: '', phoneNumber: '', message: '' },
    });

    const onSubmit = (data) => {
        reset('');
        message.success({
            content: `message is send successfuly! Thank for your feedback!`,
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
            <Container size="small">
                <h2 className={cx('title')}>get in touch</h2>
                <p className={cx('text-primary')}>
                    We collaborate with ambitious brands and people; we’d love to build something
                    great together.
                </p>
                <p className={cx('text')}>
                    Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
                    pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                    dapibus sed, urna.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row gutter={{ xs: 0, md: 10, lg: 20 }}>
                        <Col xs={24} md={8}>
                            <InputField
                                errors={errors}
                                register={register}
                                name="name"
                                label="Name"
                                isRequire
                            />
                        </Col>
                        <Col xs={24} md={8}>
                            <InputField
                                errors={errors}
                                register={register}
                                name="email"
                                label="Email"
                                isRequire
                            />
                        </Col>
                        <Col xs={24} md={8}>
                            <InputField
                                errors={errors}
                                register={register}
                                name="phoneNumber"
                                label="phone number"
                            />
                        </Col>
                    </Row>
                    <InputField
                        errors={errors}
                        register={register}
                        name="subject"
                        label="subject"
                        isRequire
                    />
                    <InputField
                        errors={errors}
                        register={register}
                        textaria
                        name="message"
                        label="message"
                        isRequire
                    />
                    <Button full outline primary rightIcon={<ArrowRightOutlined />}>
                        Submit
                    </Button>
                </form>
            </Container>
            <div className={cx('map')}>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.286038999166!2d106.71961428590289!3d10.79409964584266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%2081!5e0!3m2!1sen!2s!4v1663341694640!5m2!1sen!2s"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
        </div>
    );
}

export default ContactPage;
