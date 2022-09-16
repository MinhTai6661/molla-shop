import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputField.module.scss';
const cx = classNames.bind(styles);

function InputField({ label, placeholder, value, name, isRequire, textaria, register, errors }) {
    return (
        <div className={cx('wrapper', { isRequire, 'is-error': errors ? !!errors[name] : false })}>
            <label>
                {label} {isRequire && '*'}
            </label>
            {textaria ? (
                register ? (
                    <textarea
                        {...register(name, { isRequire })}
                        placeholder={placeholder}
                    ></textarea>
                ) : (
                    <textarea placeholder={placeholder && placeholder}></textarea>
                )
            ) : register ? (
                <input
                    {...register(name, { isRequire })}
                    placeholder={placeholder && placeholder}
                />
            ) : (
                <input placeholder={placeholder} />
            )}
            {errors && errors[name] && <p className={cx('error')}> {errors[name]?.message}</p>}
        </div>
    );
}

InputField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    textaria: PropTypes.bool,
    isRequire: PropTypes.bool,
    errors: PropTypes.object,
};

export default InputField;
