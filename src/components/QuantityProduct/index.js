import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './QuantityProduct.module.scss';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function QuantityProduct({
    defaultValue = 1,
    value = defaultValue,
    onChange,
    max = 999,
    min = 0,
    size,
    className,
}) {
    const [valueInput, setValueInput] = useState(min || defaultValue);
    const prevValue = useRef(valueInput);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if (onChange) onChange(valueInput);
    }, [valueInput]);
    useEffect(() => {
        setValueInput(+value);
    }, [value]);

    const handleChange = (mode) => {
        if (mode === 'decrease') {
            if (valueInput > min) {
                setValueInput(valueInput - 1);
            } else {
                setErrorMessage(`this value have to bettween ${min} and ${max}`);
            }
            return;
        }
        if (valueInput < max) {
            setValueInput(valueInput + 1);
        } else {
            setErrorMessage(`this value have to bettween ${min} and ${max}`);
        }
    };

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setErrorMessage('');
        }, 2000);

        return () => {
            clearTimeout(timeoutID);
        };
    }, [errorMessage]);

    const handleChaneInput = (e) => {
        const value = parseInt(e.target.value);

        if (value >= min && value <= max) {
            setValueInput(value);
        } else {
            setErrorMessage(`price have to bettween ${min} and ${max}`);
        }
    };
    return (
        <div className={cx('wrapper', { [size]: true, [className]: !!className })}>
            <Tippy
                render={(attrs) => (
                    <div className={cx('error-message')} tabIndex="-1" {...attrs}>
                        {errorMessage}
                    </div>
                )}
                visible={!!errorMessage}
            >
                <div className={cx('input-group')}>
                    <button
                        className={cx('input-group__prepend')}
                        onClick={() => handleChange('decrease')}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        min={min}
                        max={max}
                        value={valueInput}
                        onChange={handleChaneInput}
                    />
                    <button
                        className={cx('input-group__append')}
                        onClick={() => handleChange('increase')}
                    >
                        +
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

QuantityProduct.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    size: PropTypes.string,
};

export default QuantityProduct;
